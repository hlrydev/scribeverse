import React from "react";

interface ExportButtonProps {
  onExportAO3?: () => void;
  onExportDOCX?: () => void;
  onExportEPUB?: () => void;
  onExportPDF?: () => void;
  className?: string;
}

const ExportButton: React.FC<ExportButtonProps> = ({
  onExportAO3,
  onExportDOCX,
  onExportEPUB,
  onExportPDF,
  className = "",
}) => {
  const handleExport = (format: string, handler?: () => void) => {
    if (handler) {
      handler();
    } else {
      console.log(`Exporting to ${format}...`);
    }
  };

  // Create array of available export options
  const exportOptions = [
    { name: "AO3", handler: onExportAO3 },
    { name: "DOCX", handler: onExportDOCX },
    { name: "EPUB", handler: onExportEPUB },
    { name: "PDF", handler: onExportPDF },
  ].filter((option) => option.handler); // Only include options with handlers

  // Don't render if no export options are available
  if (exportOptions.length === 0) {
    return null;
  }

  return (
    <div
      className={`bg-accent hover:bg-accent/90 text-white px-4 py-2 rounded transition-colors text-sm font-medium ${className}`}
      style={{ fontFamily: "Lexend, sans-serif" }}
    >
      <span className="mr-2">Export to:</span>
      {exportOptions.map((option, index) => (
        <React.Fragment key={option.name}>
          {index > 0 && <span className="mx-1">|</span>}
          <button
            onClick={() => handleExport(option.name, option.handler)}
            className="hover:underline focus:underline focus:outline-none"
          >
            {option.name}
          </button>
        </React.Fragment>
      ))}
    </div>
  );
};

export default ExportButton;
