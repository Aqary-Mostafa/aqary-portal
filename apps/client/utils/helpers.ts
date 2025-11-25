import { FileTypes } from "@/constants/file-types";

import { PermissionType } from "@/types/permissions";

export const getGreeting = () => {
  const hour = new Date().getHours();

  if (hour >= 5 && hour < 12) {
    return "Good Morning";
  } else if (hour >= 12 && hour < 17) {
    return "Good Afternoon";
  } else if (hour >= 17 && hour < 20) {
    return "Good Evening";
  } else {
    return "Good Night";
  }
};

//? Function -> To Show Date in Proper Format
export function formatDate(isoString: string | null) {
  if (!isoString) return;
  const date = new Date(isoString);
  return date.toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });
}

//? Function -> To Show Date in Proper Format
export function getTimeFromIOS(isoString: string | null) {
  if (!isoString) return;
  const dateObj = new Date(isoString);

  const time = dateObj.toLocaleTimeString("en-US", {
    hour: "2-digit",
    minute: "2-digit",
    hour12: true,
  });
  return time;
}

//? Function -> To Check File Type

export function GetFileType(url: string) {
  if (url) {
    // Extract the file name from the URL
    const fileName: string = url.split("/").pop() || "";
    // Get the file extension
    const fileExtension = fileName ? fileName?.split(".").pop() : [];
    const extension = fileExtension || "";

    return FileTypes[extension as keyof typeof FileTypes] || "unknown";
  }
  return null;
}

//? Function -> Convery Query Params into String

export function ConverParamIntoString<T>(params: T) {
  let queryParam = "?";
  Object.entries(params as { [key: string]: string }).forEach(
    ([key, value], index) => {
      if (value) {
        if (index > 0) {
          queryParam += "&";
        }
        queryParam += `${key}=${encodeURIComponent(value as string)}`;
      }
    }
  );
  return queryParam;
}
//? Function -> Conver file to DataURL

export function FileToDataURL(file: File) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();

    reader.onload = () => resolve(reader.result);
    reader.onerror = reject;

    reader.readAsDataURL(file);
  });
}

//? Handle To Get Nested Elements
export function getAllNestedPermissions(item: PermissionType) {
  let arrayofPermissions: PermissionType[] = [];
  const PrimaryPermissionArray = item?.permissions || [];
  let SecondaryPermissionArray = item?.secondary_permission || [];
  let TertiaryPermissionArray = item?.tertiary_permission || [];
  let QuaternaryPermissionArray = item.quaternary_permission || [];
  let QuianaryPermissionArray = item.quinary_permission || [];
  if (
    [
      ...PrimaryPermissionArray,
      ...SecondaryPermissionArray,
      ...TertiaryPermissionArray,
      ...QuaternaryPermissionArray,
      ...QuianaryPermissionArray,
    ].length > 0
  ) {
    PrimaryPermissionArray?.forEach((element: PermissionType) => {
      if (
        element?.secondary_permission &&
        element?.secondary_permission?.length > 0
      ) {
        SecondaryPermissionArray = [
          ...SecondaryPermissionArray,
          ...(element?.secondary_permission || []),
        ];
      } else {
        arrayofPermissions.push(element);
      }
    });
    SecondaryPermissionArray?.forEach((element: PermissionType) => {
      if (
        element?.tertiary_permission &&
        element?.tertiary_permission?.length > 0
      ) {
        TertiaryPermissionArray = [
          ...TertiaryPermissionArray,
          ...element.tertiary_permission,
        ];
      } else {
        arrayofPermissions.push(element);
      }
    });
    TertiaryPermissionArray?.forEach((element: PermissionType) => {
      if (
        element?.quaternary_permission &&
        element?.quaternary_permission?.length > 0
      ) {
        QuaternaryPermissionArray = [
          ...QuaternaryPermissionArray,
          ...element.quaternary_permission,
        ];
      } else {
        arrayofPermissions.push(element);
      }
    });
    QuaternaryPermissionArray?.forEach((element: PermissionType) => {
      if (
        element?.quinary_permission &&
        element.quinary_permission?.length > 0
      ) {
        QuianaryPermissionArray = [
          ...QuianaryPermissionArray,
          ...element.quinary_permission,
        ];
      } else {
        arrayofPermissions.push(element);
      }
    });
    QuianaryPermissionArray?.forEach((element: PermissionType) => {
      arrayofPermissions.push(element);
    });
  } else {
    arrayofPermissions = [item];
  }
  const result = arrayofPermissions.map((item: PermissionType) => {
    return {
      id: item?.id,
      button_id: item?.sub_section_button_id || undefined,
      permission_id: item?.permission_id || undefined,
      secondary_id: item?.secondary_id || undefined,
      tertiary_id: item?.tertiary_id || undefined,
      quaternary_id: item?.quaternary_id || undefined,
    };
  });
  return result;
}

// ? convert from "971 - 503473845" to {key:971, number:503473845}
export const extractPhoneNumber = (phoneString?: string) => {
  if (!phoneString) return;

  const parts = phoneString?.split("-");

  const key = parseInt(parts?.[0]?.trim() ?? "", 10);
  const number = parseInt(parts?.[1]?.trim() ?? "", 10);

  return {
    key: key || NaN,
    number: number || NaN,
  };
};

//? Check Valid URL

export const isValidUrl = (urlString: string) => {
  let url;
  try {
    url = new URL(urlString);
  } catch (e) {
    return false;
  }
  return url.protocol === "http:" || url.protocol === "https:";
};

// ? Iban validation function
export const validateIban = (iban: string): boolean => {
  iban = iban.replace(/\s+/g, "").toUpperCase();
  if (!/^[A-Z]{2}[0-9]{2}[A-Z0-9]+$/.test(iban)) {
    return false;
  }
  const rearrangedIban = iban.slice(4) + iban.slice(0, 4);
  const ibanAsNumbers = rearrangedIban
    .split("")
    .map((char) => {
      if (/[A-Z]/.test(char)) {
        return char.charCodeAt(0) - 55;
      } else {
        return char;
      }
    })
    .join("");
  let remainder = ibanAsNumbers;
  while (remainder.length > 2) {
    const block = remainder.slice(0, 9);
    remainder = (parseInt(block, 10) % 97) + remainder.slice(9);
  }
  return parseInt(remainder, 10) % 97 === 1;
};
