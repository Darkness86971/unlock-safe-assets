import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { CountdownTimer } from "@/components/CountdownTimer";
import { BitcoinIcon } from "@/components/BitcoinIcon";
import { StatusCard } from "@/components/StatusCard";
import { EducationModal } from "@/components/EducationModal";
import { Copy, Info } from "lucide-react";
import { toast } from "sonner";

const Index = () => {
  const [decryptKey, setDecryptKey] = useState("");
  const btcAddress = "16KQjht4ePZxxGPr3es24VQyMYgR9UEkFy";

  const handleCopy = () => {
    navigator.clipboard.writeText(btcAddress);
    toast.success("BTC address copied to clipboard");
  };

  const handleDecrypt = () => {
    if (decryptKey.trim()) {
      toast.info("This is a demonstration only - no actual encryption occurs");
    } else {
      toast.error("Please enter a decryption key");
    }
  };

  return (
    <div className="min-h-screen bg-background text-foreground p-4 md:p-8 font-mono">
      {/* Educational Disclaimer with Animation */}
      <div className="max-w-4xl mx-auto mb-6 p-4 border border-cyber-yellow bg-card rounded-lg animate-fade-in shadow-[0_0_20px_rgba(255,255,0,0.2)]">
        <div className="flex items-start gap-3">
          <Info className="w-5 h-5 text-cyber-yellow flex-shrink-0 mt-0.5 animate-pulse" />
          <div className="flex-1">
            <p className="text-cyber-yellow text-sm font-semibold mb-2">
              ⚠️ EDUCATIONAL DEMONSTRATION ONLY
            </p>
            <p className="text-cyber-yellow text-xs leading-relaxed">
              This is a security awareness interface showing how ransomware screens work. No files are encrypted or harmed. This tool is designed to educate users about cybersecurity threats.
            </p>
          </div>
          <EducationModal />
        </div>
      </div>

      {/* Status Cards with Staggered Animation */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-4xl mx-auto mb-8">
        <div className="animate-fade-in" style={{ animationDelay: "0.1s", animationFillMode: "both" }}>
          <div className="bg-card border border-primary rounded-lg p-4 hover:shadow-[0_0_20px_rgba(0,255,0,0.3)] transition-all duration-300">
            <StatusCard
              icon={<BitcoinIcon />}
              title="Data will be lost after"
              value="48h"
            />
          </div>
        </div>
        <div className="animate-fade-in" style={{ animationDelay: "0.2s", animationFillMode: "both" }}>
          <div className="bg-card border border-primary rounded-lg p-4 hover:shadow-[0_0_20px_rgba(0,255,0,0.3)] transition-all duration-300">
            <StatusCard
              icon={<CountdownTimer initialHours={48} />}
              title="Numbers of encrypted files"
              value="N/A"
            />
          </div>
        </div>
        <div className="animate-fade-in" style={{ animationDelay: "0.3s", animationFillMode: "both" }}>
          <div className="bg-card border border-primary rounded-lg p-4 hover:shadow-[0_0_20px_rgba(0,255,0,0.3)] transition-all duration-300">
            <StatusCard
              icon={<BitcoinIcon />}
              title="The cost of the key for encryption"
              value="0.00092 BTC"
            />
          </div>
        </div>
      </div>

      {/* Warning Section with Enhanced Styling */}
      <div className="max-w-4xl mx-auto mb-8 p-6 bg-card border border-primary rounded-lg animate-fade-in shadow-[0_0_30px_rgba(0,255,0,0.2)] hover:shadow-[0_0_40px_rgba(0,255,0,0.3)] transition-all duration-300">
        <h2 className="text-2xl font-bold text-primary mb-4 animate-pulse">WARNING,</h2>
        <p className="text-primary mb-4">
          Your data has been encrypted, all your personal videos, photos, documents and files have been LOCKED with encryption!
        </p>
        <div className="mb-4">
          <p className="text-primary font-bold">DO NOT :</p>
          <ul className="text-primary space-y-1 ml-4">
            <li>• Close This Screen</li>
            <li>• Uninstall This Application.</li>
            <li>• Power Off This Device.</li>
            <li>• Disconnect Internet Access.</li>
          </ul>
        </div>
        <p className="text-primary mb-4">
          The one-time decryption key will be deleted if you do not follow these instructions, your files will be LOST FOREVER.
        </p>
        <div>
          <p className="text-primary font-bold">DO :</p>
          <ul className="text-primary space-y-1 ml-4">
            <li>• Plug In Your Charger To Stop Any Accidents</li>
            <li>• Pay As Soon As Possible.</li>
          </ul>
        </div>
      </div>


      {/* Useful Information */}
      <div className="max-w-4xl mx-auto mb-8 p-6 bg-card border border-accent rounded-lg animate-fade-in shadow-[0_0_20px_rgba(255,165,0,0.2)] hover:shadow-[0_0_30px_rgba(255,165,0,0.3)] transition-all duration-300">
        <h2 className="text-2xl font-bold text-accent mb-4">Useful Information</h2>
        <div className="flex flex-col md:flex-row items-start md:items-center gap-4 mb-6">
          <div className="flex-1">
            <p className="text-foreground break-all">BTC addr: {btcAddress}</p>
          </div>
          <Button
            onClick={handleCopy}
            className="bg-muted hover:bg-muted/80 text-foreground transition-all duration-300 hover:shadow-[0_0_15px_rgba(0,255,0,0.3)] hover:scale-105"
          >
            <Copy className="w-4 h-4 mr-2" />
            COPY
          </Button>
        </div>

        {/* Decrypt Section */}
        <div>
          <h3 className="text-xl font-bold text-primary mb-4">Decrypt</h3>
          <div className="flex flex-col md:flex-row gap-4">
            <Input
              type="text"
              placeholder="Key: paste your key here..."
              value={decryptKey}
              onChange={(e) => setDecryptKey(e.target.value)}
              className="flex-1 bg-input border-primary text-foreground placeholder:text-muted-foreground"
            />
            <Button
              onClick={handleDecrypt}
              className="bg-primary hover:bg-primary/90 text-primary-foreground transition-all duration-300 hover:shadow-[0_0_20px_rgba(0,255,0,0.5)] hover:scale-105 whitespace-nowrap"
            >
              DECRYPT
            </Button>
          </div>
        </div>
      </div>

      {/* Final Warning */}
      <div className="max-w-4xl mx-auto p-6 bg-card border border-warning rounded-lg text-center animate-fade-in shadow-[0_0_20px_rgba(255,0,0,0.2)]">
        <p className="text-warning text-lg">
          Do not delete this APP,{" "}
          <span className="ml-2">or your files will not be back forever!!!</span>
        </p>
      </div>

      {/* Footer Educational Reminder */}
      <div className="max-w-4xl mx-auto mt-6 p-4 border border-destructive bg-card rounded-lg animate-fade-in shadow-[0_0_20px_rgba(255,0,0,0.2)]">
        <p className="text-destructive text-center text-sm font-bold leading-relaxed">
          ⚠️ REMEMBER: This is an educational simulation. Real ransomware is a serious crime that causes significant harm. Never create, distribute, or use malicious software.
        </p>
      </div>
    </div>
  );
};

export default Index;
