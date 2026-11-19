import { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

export default function ExpandableText({ shortText, fullText }) {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className="expandable-text">
      <p>{expanded ? fullText : shortText}</p>

      <button
        type="button"
        className="expandable-text__button"
        onClick={() => setExpanded(!expanded)}
        aria-expanded={expanded}
      >
        {expanded ? (
          <>
            Свернуть <ChevronUp size={17} />
          </>
        ) : (
          <>
            Подробнее <ChevronDown size={17} />
          </>
        )}
      </button>
    </div>
  );
}
