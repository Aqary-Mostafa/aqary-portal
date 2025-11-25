"use client";
import { Box } from "@mui/material";
import { useRef, useState } from "react";
import { IoCheckmarkDoneCircle } from "react-icons/io5";
import { MdContentCopy } from "react-icons/md";

const CellWithCopy = ({
  url,
  hideText,
}: {
  url: string;
  hideText?: boolean;
}) => {
  const [isCopied, setIsCopied] = useState(false);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  const copyToClipboard = (text: string) => {
    if (
      navigator.clipboard &&
      typeof navigator.clipboard.writeText === "function"
    ) {
      return navigator.clipboard.writeText(text);
    } else {
      // Fallback for unsupported environments
      const textArea = document.createElement("textarea");
      textArea.value = text;
      document.body.appendChild(textArea);
      textArea.select();
      try {
        document.execCommand("copy");
      } finally {
        document.body.removeChild(textArea);
      }
      return Promise.resolve();
    }
  };

  const handleHold = () => {
    copyToClipboard(url).then(() => {
      setIsCopied(true);

      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }

      timeoutRef.current = setTimeout(() => {
        setIsCopied(false);
      }, 500);
    });
  };

  return (
    <Box
      sx={{ display: "flex", alignItems: "center", gap: "8px" }}
      className="Cell-With-Copy"
    >
      {!hideText && (
        <Box component="span" sx={{ width: "auto" }}>
          {url?.length > 50 ? url.substring(0, 50).concat("...") : url}
        </Box>
      )}
      {isCopied ? (
        <IoCheckmarkDoneCircle />
      ) : (
        <MdContentCopy
          style={{ cursor: "pointer", width: "20px" }}
          onClick={handleHold}
        />
      )}
    </Box>
  );
};

export default CellWithCopy;
