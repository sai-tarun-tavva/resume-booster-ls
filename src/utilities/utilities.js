export const formatContent = (data, classes) => {
  return data.map((item, index) => {
    let trimmedItem = item.trim();

    // Check for section headers (##)
    if (trimmedItem.startsWith("##")) {
      return (
        <h2 key={index} className={classes.title}>
          {trimmedItem.replace(/^##\s*/, "")}
        </h2>
      );
    }
    // Check for bold text (**)
    else if (trimmedItem.startsWith("**") && trimmedItem.endsWith("**")) {
      return (
        <p key={index} className={classes.subTitle}>
          {trimmedItem.replace(/^\*\*|^(\*\*\s*)|(\s*\*\*)$|\*\*$/g, "")}
        </p>
      );
    }
    // Handle bullet points with potential bold text
    else if (trimmedItem.startsWith("*")) {
      //   trimmedItem = trimmedItem.replace(/^\*\s*/, "");
      const bulletPoints = trimmedItem.split(/\n\*\s*/);
      return (
        <ul key={index} className={classes.list}>
          {bulletPoints.map((point, pointIndex) => {
            if (point.trim() === "") return null;
            const segments = point.split(/(\*\*.*?\*\*)/);
            return (
              <li key={pointIndex} className={classes.listItem}>
                {segments.map((segment, segmentIndex) => {
                  if (segment.startsWith("**") && segment.endsWith("**")) {
                    return (
                      <strong key={segmentIndex} className={classes.bold}>
                        {segment
                          .replace(/^\*\s/, "")
                          .trim()
                          .replace(/^\*\*|\*\*$/g, "")}
                      </strong>
                    );
                  }
                  return <span key={segmentIndex}>{segment}</span>;
                })}
              </li>
            );
          })}
        </ul>
      );
    }
    // Check for numbered lists (1., 2., 3., etc.)
    else if (/^\d+\.\s/.test(trimmedItem)) {
      return (
        <li key={index} className={classes.numberedListItem}>
          {trimmedItem.replace(/^\d+\.\s/, "").trim()}
        </li>
      );
    }
    // Check for inline code (``)
    else if (trimmedItem.startsWith("`") && trimmedItem.endsWith("`")) {
      return (
        <code key={index} className={classes.inlineCode}>
          {trimmedItem.replace(/`/g, "")}
        </code>
      );
    }
    // Check for block code (```)
    else if (trimmedItem.startsWith("```")) {
      return (
        <pre key={index} className={classes.blockCode}>
          {trimmedItem.replace(/```/g, "").trim()}
        </pre>
      );
    }
    // Default case for regular paragraphs
    else {
      return (
        <p key={index} className={classes.paragraph}>
          {trimmedItem}
        </p>
      );
    }
  });
};
