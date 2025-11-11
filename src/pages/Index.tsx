import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { CountdownTimer } from "@/components/CountdownTimer";
import { BitcoinIcon } from "@/components/BitcoinIcon";
import { StatusCard } from "@/components/StatusCard";

import { Copy } from "lucide-react";
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
      {/* Educational Disclaimer */}
      <div className="max-w-4xl mx-auto mb-6 p-4 border border-cyber-yellow bg-card rounded-lg">
        <p className="text-cyber-yellow text-center text-sm">
          ⚠️ EDUCATIONAL DEMONSTRATION ONLY - This is a security awareness interface showing how ransomware screens work. No files are encrypted.
        </p>
      </div>

      {/* Status Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-4xl mx-auto mb-8">
        <StatusCard
          icon={<BitcoinIcon />}
          title="Data will be lost after"
          value="48h"
        />
        <StatusCard
          icon={<CountdownTimer initialHours={48} />}
          title="Numbers of encrypted files"
          value="N/A"
        />
        <StatusCard
          icon={<BitcoinIcon />}
          title="The cost of the key for encryption"
          value="0.00092 BTC"
        />
      </div>

      {/* Warning Section */}
      <div className="max-w-4xl mx-auto mb-8 p-6 bg-card border border-primary rounded-lg">
        <h2 className="text-2xl font-bold text-primary mb-4">WARNING,</h2>
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
      <div className="max-w-4xl mx-auto mb-8 p-6 bg-card border border-accent rounded-lg">
        <h2 className="text-2xl font-bold text-accent mb-4">Useful Information</h2>
        <div className="flex flex-col md:flex-row items-start md:items-center gap-4 mb-6">
          <div className="flex-1">
            <p className="text-foreground break-all">BTC addr: {btcAddress}</p>
          </div>
          <Button
            onClick={handleCopy}
            className="bg-muted hover:bg-muted/80 text-foreground"
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
              className="bg-muted hover:bg-muted/80 text-foreground whitespace-nowrap"
            >
              DECRYPT
            </Button>
          </div>
        </div>
      </div>

      {/* Final Warning */}
      <div className="max-w-4xl mx-auto p-6 bg-card border border-warning rounded-lg text-center">
        <p className="text-warning text-lg">
          Do not delete this APP,{" "}
          <span className="ml-2">or your files will not be back forever!!!</span>
        </p>
      </div>
    </div>
  );
};

export default Index;
