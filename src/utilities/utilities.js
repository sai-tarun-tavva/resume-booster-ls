// Splits array items by new lines and trims whitespace
const splitArrayItems = (arr) => {
  return arr.flatMap((item) =>
    item.split(/\n\s*/).map((subItem) => subItem.trim())
  );
};

// Formats content based on specific rules (headers, bold text, lists, etc.)
export const formatContent = (data, classes) => {
  const updatedData = splitArrayItems(data);

  return updatedData.map((item, index) => {
    const trimmedItem = item.replace(/-/g, "").trim();

    // Function to wrap text in italics if enclosed in quotes
    const italicizeQuotes = (text) => {
      return text.split(/(".*?")/g).map((segment, segmentIndex) => {
        if (segment.startsWith('"') && segment.endsWith('"')) {
          return <em key={segmentIndex}>{segment.slice(1, -1)}</em>; // Remove quotes and italicize
        }
        return segment; // Return other text as is
      });
    };

    // Handle section headers (##)
    if (trimmedItem.startsWith("##")) {
      return (
        <h2 key={index} className={classes.title}>
          {trimmedItem.replace(/^##\s*/, "")}
        </h2>
      );
    }

    // Handle bold text (**)
    if (trimmedItem.startsWith("**") && trimmedItem.endsWith("**")) {
      return (
        <p key={index} className={classes.subTitle}>
          {trimmedItem.replace(/^\*\*|\*\*$/g, "").trim()}
        </p>
      );
    }

    // Handle bullet points
    if (trimmedItem.startsWith("*")) {
      const bulletPoints = trimmedItem.split(/\n\s*/);
      return (
        <ul key={index} className={classes.list}>
          {bulletPoints.map((point, pointIndex) => {
            if (point.trim() === "") return null;
            return (
              <li key={pointIndex} className={classes.listItem}>
                {point.split(/(\*\*.*?\*\*)/).map((segment, segmentIndex) => {
                  // Render bold text segments
                  if (segment.startsWith("**") && segment.endsWith("**")) {
                    return (
                      <strong key={segmentIndex} className={classes.bold}>
                        {segment.replace(/^\*\*|\*\*$/g, "").trim()}
                      </strong>
                    );
                  }
                  // Render other segments
                  return (
                    <span key={segmentIndex}>
                      {italicizeQuotes(segment.replace(/^\*\s*/, ""))}
                    </span>
                  );
                })}
              </li>
            );
          })}
        </ul>
      );
    }

    // Handle numbered lists (1., 2., 3., etc.)
    if (/^\d+\.\s/.test(trimmedItem)) {
      return (
        <li key={index} className={classes.numberedListItem}>
          {trimmedItem.replace(/^\d+\.\s/, "").trim()}
        </li>
      );
    }

    // Handle inline code (``)
    if (trimmedItem.startsWith("`") && trimmedItem.endsWith("`")) {
      return (
        <code key={index} className={classes.inlineCode}>
          {trimmedItem.replace(/`/g, "")}
        </code>
      );
    }

    // Handle block code (```)
    if (trimmedItem.startsWith("```")) {
      return (
        <pre key={index} className={classes.blockCode}>
          {trimmedItem.replace(/```/g, "").trim()}
        </pre>
      );
    }

    // Handle hashtags
    if (/^(#[a-zA-Z0-9_]+\s*)+$/.test(trimmedItem)) {
      const hashtags = trimmedItem.split(/\s+/);
      return (
        <div key={index} className={classes.hashtagContainer}>
          {hashtags.map((tag, tagIndex) => (
            <span key={tagIndex} className={classes.hashtag}>
              {tag}
            </span>
          ))}
        </div>
      );
    }

    // Default case for regular paragraphs
    return (
      <p key={index} className={classes.paragraph}>
        {italicizeQuotes(trimmedItem)}
      </p>
    );
  });
};
