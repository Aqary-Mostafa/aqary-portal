import { signOut } from "@/utils/auth";

export const toggleFullSceen = (): void => {
  if (!document.fullscreenElement) {
    document.documentElement.requestFullscreen();
  } else {
    if (document.exitFullscreen) {
      document.exitFullscreen();
    }
  }
};

export const handleLogout = async () => {
  await signOut();
};
