export const dbTypeChecking = ({
    title,
    link,
    id,
    published,
    updated,
    summary,
    author,
  }) => {
    if (
      typeof title != "string" ||
      typeof link != "string" ||
      typeof id != "string" ||
      typeof published != "string" ||
      typeof updated != "string" ||
      typeof summary != "string" ||
      typeof author != "string"
    ) {
      return false;
    } else {
      return true;
    }
  };