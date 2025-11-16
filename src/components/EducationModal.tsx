import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Shield, AlertTriangle, Lock, Download } from "lucide-react";

export const EducationModal = () => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button
          variant="outline"
          className="border-primary text-primary hover:bg-primary hover:text-primary-foreground"
        >
          <Shield className="w-4 h-4 mr-2" />
          Learn About Protection
        </Button>
      </DialogTrigger>
      <DialogContent className="bg-card border-primary text-foreground max-w-2xl max-h-[80vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl text-primary flex items-center gap-2">
            <Shield className="w-6 h-6" />
            How to Protect Yourself from Ransomware
          </DialogTitle>
          <DialogDescription className="text-muted-foreground">
            Educational information about ransomware prevention and security
          </DialogDescription>
        </DialogHeader>
        
        <div className="space-y-6 mt-4">
          {/* What is Ransomware */}
          <section>
            <h3 className="text-lg font-bold text-accent flex items-center gap-2 mb-2">
              <AlertTriangle className="w-5 h-5" />
              What is Ransomware?
            </h3>
            <p className="text-foreground text-sm leading-relaxed">
              Ransomware is malicious software that encrypts your files and demands payment (usually in cryptocurrency) for the decryption key. It can spread through phishing emails, malicious downloads, or security vulnerabilities.
            </p>
          </section>

          {/* Prevention Tips */}
          <section>
            <h3 className="text-lg font-bold text-primary flex items-center gap-2 mb-2">
              <Lock className="w-5 h-5" />
              Prevention Tips
            </h3>
            <ul className="text-foreground text-sm space-y-2">
              <li className="flex items-start gap-2">
                <span className="text-primary mt-1">•</span>
                <span><strong>Regular Backups:</strong> Keep offline backups of important data (3-2-1 rule: 3 copies, 2 different media, 1 offsite)</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary mt-1">•</span>
                <span><strong>Update Software:</strong> Keep your OS, browsers, and applications updated with security patches</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary mt-1">•</span>
                <span><strong>Use Antivirus:</strong> Install reputable antivirus software and keep it updated</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary mt-1">•</span>
                <span><strong>Be Cautious:</strong> Don't open suspicious email attachments or click unknown links</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary mt-1">•</span>
                <span><strong>Use Strong Passwords:</strong> Enable two-factor authentication where possible</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary mt-1">•</span>
                <span><strong>Limit Privileges:</strong> Don't use admin accounts for daily tasks</span>
              </li>
            </ul>
          </section>

          {/* If Infected */}
          <section>
            <h3 className="text-lg font-bold text-destructive flex items-center gap-2 mb-2">
              <AlertTriangle className="w-5 h-5" />
              If You Get Infected
            </h3>
            <ul className="text-foreground text-sm space-y-2">
              <li className="flex items-start gap-2">
                <span className="text-destructive mt-1">1.</span>
                <span><strong>Isolate:</strong> Disconnect from network immediately</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-destructive mt-1">2.</span>
                <span><strong>Don't Pay:</strong> Paying doesn't guarantee file recovery and funds criminals</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-destructive mt-1">3.</span>
                <span><strong>Report:</strong> Contact law enforcement and cybersecurity authorities</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-destructive mt-1">4.</span>
                <span><strong>Seek Help:</strong> Consult cybersecurity professionals</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-destructive mt-1">5.</span>
                <span><strong>Check Decryptors:</strong> Visit nomoreransom.org for free decryption tools</span>
              </li>
            </ul>
          </section>

          {/* Resources */}
          <section className="border border-accent rounded-lg p-4 bg-muted">
            <h3 className="text-lg font-bold text-accent flex items-center gap-2 mb-2">
              <Download className="w-5 h-5" />
              Helpful Resources
            </h3>
            <ul className="text-foreground text-sm space-y-1">
              <li>• <a href="https://www.nomoreransom.org" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">NoMoreRansom.org</a> - Free decryption tools</li>
              <li>• <a href="https://www.cisa.gov/stopransomware" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">CISA Stop Ransomware</a> - Government resources</li>
              <li>• <a href="https://www.us-cert.gov" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">US-CERT</a> - Cybersecurity alerts</li>
            </ul>
          </section>
        </div>
      </DialogContent>
    </Dialog>
  );
};
