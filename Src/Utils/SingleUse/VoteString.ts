export const processInfo = (info: string): { index: number; text: string }[] => {
    if (!info) return [];
    return info
      .replace(/\\+/g, "")
      .replace(/[\[\]"]+/g, "")
      .split(",")
      .map((item) => {
        const parts = item.split(":");
        if (parts.length === 2) {
          return { index: parseInt(parts[0]), text: parts[1] };
        }
        return null;
      })
      .filter((item): item is { index: number; text: string } => item !== null);
  };