import { useState, useEffect } from "react";
import { File, Lock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface DemoFile {
  id: number;
  name: string;
  type: string;
  encrypted: boolean;
  encrypting: boolean;
}

const initialFiles: DemoFile[] = [
  { id: 1, name: "vacation_photo.jpg", type: "image", encrypted: false, encrypting: false },
  { id: 2, name: "work_presentation.pdf", type: "document", encrypted: false, encrypting: false },
  { id: 3, name: "family_video.mp4", type: "video", encrypted: false, encrypting: false },
  { id: 4, name: "tax_documents.docx", type: "document", encrypted: false, encrypting: false },
  { id: 5, name: "personal_notes.txt", type: "text", encrypted: false, encrypting: false },
  { id: 6, name: "wedding_album.png", type: "image", encrypted: false, encrypting: false },
];

export const FileEncryptionDemo = () => {
  const [files, setFiles] = useState<DemoFile[]>(initialFiles);
  const [isRunning, setIsRunning] = useState(false);
  const [encryptedCount, setEncryptedCount] = useState(0);

  const startEncryption = () => {
    setIsRunning(true);
    setFiles(initialFiles);
    setEncryptedCount(0);
  };

  const resetDemo = () => {
    setIsRunning(false);
    setFiles(initialFiles);
    setEncryptedCount(0);
  };

  useEffect(() => {
    if (!isRunning) return;

    const unencryptedFiles = files.filter(f => !f.encrypted && !f.encrypting);
    if (unencryptedFiles.length === 0) {
      setIsRunning(false);
      return;
    }

    const timer = setTimeout(() => {
      const fileToEncrypt = unencryptedFiles[0];
      
      // Start encrypting animation
      setFiles(prev => prev.map(f => 
        f.id === fileToEncrypt.id ? { ...f, encrypting: true } : f
      ));

      // Complete encryption after animation
      setTimeout(() => {
        setFiles(prev => prev.map(f => 
          f.id === fileToEncrypt.id ? { ...f, encrypting: false, encrypted: true } : f
        ));
        setEncryptedCount(prev => prev + 1);
      }, 1000);
    }, 800);

    return () => clearTimeout(timer);
  }, [files, isRunning]);

  return (
    <div className="w-full p-6 bg-card border border-accent rounded-lg">
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-xl font-bold text-accent">File Encryption Simulation</h3>
        <div className="flex gap-2">
          <Button
            onClick={startEncryption}
            disabled={isRunning}
            className="bg-primary hover:bg-primary/80 text-primary-foreground"
          >
            Start Demo
          </Button>
          <Button
            onClick={resetDemo}
            variant="outline"
            className="border-muted-foreground text-foreground"
          >
            Reset
          </Button>
        </div>
      </div>

      <div className="mb-4 p-3 bg-background/50 rounded border border-border">
        <p className="text-sm text-muted-foreground">
          Files Encrypted: <span className="text-foreground font-bold">{encryptedCount}</span> / {files.length}
        </p>
      </div>

      <div className="space-y-2 max-h-96 overflow-y-auto">
        {files.map((file) => (
          <div
            key={file.id}
            className={cn(
              "flex items-center gap-3 p-3 rounded border transition-all duration-300",
              file.encrypted 
                ? "bg-destructive/10 border-destructive" 
                : file.encrypting
                ? "bg-warning/10 border-warning animate-pulse"
                : "bg-background border-border"
            )}
          >
            <div className="relative">
              <File className={cn(
                "w-5 h-5 transition-colors",
                file.encrypted ? "text-destructive" : "text-foreground"
              )} />
              {file.encrypted && (
                <Lock className="w-3 h-3 text-destructive absolute -top-1 -right-1 animate-scale-in" />
              )}
            </div>
            
            <div className="flex-1 min-w-0">
              <p className={cn(
                "text-sm font-mono truncate transition-colors",
                file.encrypted ? "text-destructive line-through" : "text-foreground"
              )}>
                {file.name}
              </p>
              {file.encrypted && (
                <p className="text-sm font-mono text-destructive animate-fade-in">
                  {file.name}.dead
                </p>
              )}
            </div>

            <div className={cn(
              "text-xs px-2 py-1 rounded transition-all",
              file.encrypted 
                ? "bg-destructive text-destructive-foreground font-bold" 
                : file.encrypting
                ? "bg-warning text-warning-foreground animate-pulse"
                : "bg-muted text-muted-foreground"
            )}>
              {file.encrypted ? "LOCKED" : file.encrypting ? "ENCRYPTING..." : "Normal"}
            </div>
          </div>
        ))}
      </div>

      <div className="mt-4 p-3 bg-muted/50 rounded border border-border">
        <p className="text-xs text-muted-foreground italic">
          ℹ️ This is a visual demonstration only. No actual files are being encrypted or modified.
        </p>
      </div>
    </div>
  );
};
