/**
 * Resets the status asynchronously.
 * @param {function} action - The action to dispatch.
 * @returns {Promise<void>} A promise that resolves after the status is reset.
 */
export const resetStatusAsync = (action) => (dispatch) => {
  return new Promise((resolve) => {
    dispatch(action());
    resolve(); // Resolve after resetting status
  });
};

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

    // Handle section headers (##)
    if (trimmedItem.startsWith("###")) {
      return (
        <h3 key={index} className={classes.subTitle}>
          {trimmedItem.replace(/^###\s*/, "")}
        </h3>
      );
    } else if (trimmedItem.startsWith("##")) {
      return (
        <h2 key={index} className={classes.title}>
          {trimmedItem.replace(/^##\s*/, "")}
        </h2>
      );
    } else if (trimmedItem.startsWith("#")) {
      return (
        <h1 key={index} className={classes.mainTitle}>
          {trimmedItem.replace(/^#\s*/, "")}
        </h1>
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

    // Handle blockquotes (>)
    if (trimmedItem.startsWith(">")) {
      return (
        <blockquote key={index} className={classes.blockquote}>
          {italicizeQuotes(trimmedItem.replace(/^>\s*/, ""))}
        </blockquote>
      );
    }

    // Handle horizontal rules (---)
    if (/^---$/.test(trimmedItem)) {
      return <hr key={index} className={classes.horizontalRule} />;
    }

    // Handle links ([title](url))
    if (/\[.*?\]\(.*?\)/.test(trimmedItem)) {
      const linkText = trimmedItem.match(/\[(.*?)\]/)[1];
      const linkUrl = trimmedItem.match(/\((.*?)\)/)[1];
      return (
        <a key={index} href={linkUrl} className={classes.link}>
          {linkText}
        </a>
      );
    }

    // Handle images (![alt](src))
    if (/!\[.*?\]\(.*?\)/.test(trimmedItem)) {
      const altText = trimmedItem.match(/!\[(.*?)\]/)[1];
      const imgUrl = trimmedItem.match(/\((.*?)\)/)[1];
      return (
        <img key={index} src={imgUrl} alt={altText} className={classes.image} />
      );
    }

    // Handle tables (| Syntax | Description |)
    if (/^\|.*\|.*\|/.test(trimmedItem)) {
      const rows = trimmedItem.split("\n");
      return (
        <table key={index} className={classes.table}>
          <thead>
            <tr>
              {rows[0]
                .split("|")
                .filter((cell) => cell.trim())
                .map((header, headerIndex) => (
                  <th key={headerIndex} className={classes.tableHeader}>
                    {header.trim()}
                  </th>
                ))}
            </tr>
          </thead>
          <tbody>
            {rows.slice(1).map((row, rowIndex) => (
              <tr key={rowIndex}>
                {row
                  .split("|")
                  .filter((cell) => cell.trim())
                  .map((cell, cellIndex) => (
                    <td key={cellIndex} className={classes.tableCell}>
                      {cell.trim()}
                    </td>
                  ))}
              </tr>
            ))}
          </tbody>
        </table>
      );
    }

    // Handle footnotes ([^1])
    if (/\[\^(\d+)\]/.test(trimmedItem)) {
      const footnoteNumber = trimmedItem.match(/\[\^(\d+)\]/)[1];
      return (
        <sup key={index} className={classes.footnote}>
          {footnoteNumber}
        </sup>
      );
    }

    // Handle definition lists (term : definition)
    if (/.+:\s.+/.test(trimmedItem)) {
      const [term, definition] = trimmedItem.split(/\s*:\s*/);
      return (
        <dl key={index} className={classes.definitionList}>
          <dt className={classes.term}>{term}</dt>
          <dd className={classes.definition}>{definition}</dd>
        </dl>
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
