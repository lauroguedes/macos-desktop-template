import { ref, onBeforeUnmount } from "vue";

export const useCurrentTime = () => {
  const currentTime = ref("");
  const updateCurrentTime = () => {
    const date = new Date();
    const cleanDate = date
      .toUTCString()
      .replace("GMT", "")
      .replace(",", "")
      .replace(date.getFullYear(), "");
    currentTime.value = cleanDate.substring(0, 17);
  };
  const updateTimeInterval = setInterval(updateCurrentTime, 1000);
  onBeforeUnmount(() => {
    clearInterval(updateTimeInterval);
  });
  return {
    currentTime,
  };
};
