import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { useToast } from "@/hooks/use-toast";
import { Shield, Activity, HardDrive, Clock, Terminal, Trash2, FileText } from "lucide-react";

// Mock victim data for educational demonstration
const mockVictims = [
  {
    id: "VIC-001",
    deviceModel: "Windows 10 Pro",
    ipAddress: "192.168.1.100",
    osVersion: "10.0.19045",
    lastPoll: "2 min ago",
    status: "active",
    filesEncrypted: 1247,
  },
  {
    id: "VIC-002",
    deviceModel: "Windows 11 Home",
    ipAddress: "10.0.0.45",
    osVersion: "11.0.22621",
    lastPoll: "5 min ago",
    status: "active",
    filesEncrypted: 892,
  },
  {
    id: "VIC-003",
    deviceModel: "Windows 10 Enterprise",
    ipAddress: "172.16.0.23",
    osVersion: "10.0.19044",
    lastPoll: "15 min ago",
    status: "idle",
    filesEncrypted: 2103,
  },
];

const AdminPanel = () => {
  const { toast } = useToast();
  const [selectedVictim, setSelectedVictim] = useState<string | null>(null);
  const [commandLog, setCommandLog] = useState<Array<{ time: string; action: string; victim: string }>>([]);
  const [isConnected, setIsConnected] = useState(true);

  const executeSimulatedCommand = (action: string, victimId: string) => {
    const timestamp = new Date().toLocaleTimeString();
    setCommandLog(prev => [{
      time: timestamp,
      action: action,
      victim: victimId
    }, ...prev].slice(0, 10));

    toast({
      title: "⚠️ SIMULATED COMMAND",
      description: `Action: ${action} | Victim: ${victimId} | This is a SAFE SIMULATION - no actual commands executed`,
    });
  };

  return (
    <div className="min-h-screen bg-terminal-bg text-cyber-green p-6">
      {/* Educational Warning Banner */}
      <div className="mb-6 p-4 border-2 border-warning-red bg-warning-red/10 rounded-lg animate-pulse">
        <div className="flex items-center gap-2 text-warning-red font-mono">
          <Shield className="w-5 h-5" />
          <span className="font-bold">EDUCATIONAL SIMULATION ONLY</span>
        </div>
        <p className="text-warning-red/80 text-sm mt-2 font-mono">
          This is a safe, simulated control panel for security awareness training. All data is fake. No actual commands are executed.
        </p>
      </div>

      {/* Header with Connection Status */}
      <div className="mb-8 flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold mb-2 text-cyber-green-bright font-mono flex items-center gap-3">
            [SIMULATED] Ransomware C2 Panel
            <span className="text-xs px-3 py-1 bg-cyber-green/20 border border-cyber-green rounded-full flex items-center gap-2">
              <span className={`w-2 h-2 rounded-full ${isConnected ? 'bg-cyber-green animate-pulse' : 'bg-warning-red'}`}></span>
              {isConnected ? 'ONLINE' : 'OFFLINE'}
            </span>
          </h1>
          <p className="text-muted-foreground font-mono text-sm">Educational demonstration of command & control interface</p>
        </div>
        <div className="text-right font-mono text-sm text-muted-foreground">
          <p>Server Time: {new Date().toLocaleTimeString()}</p>
          <p>Mock Data Session</p>
        </div>
      </div>

      {/* Dashboard Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
        <Card className="bg-card border-border p-4 hover:border-cyber-green/50 transition-all">
          <div className="flex items-center gap-3">
            <Activity className="w-8 h-8 text-cyber-green animate-pulse" />
            <div>
              <p className="text-sm text-muted-foreground font-mono">Active Victims</p>
              <p className="text-2xl font-bold text-cyber-green font-mono">{mockVictims.filter(v => v.status === "active").length}</p>
            </div>
          </div>
          <div className="mt-2 text-xs text-cyber-green/60 font-mono">
            +{mockVictims.filter(v => v.status === "idle").length} idle
          </div>
        </Card>

        <Card className="bg-card border-border p-4 hover:border-bitcoin-orange/50 transition-all">
          <div className="flex items-center gap-3">
            <HardDrive className="w-8 h-8 text-bitcoin-orange" />
            <div>
              <p className="text-sm text-muted-foreground font-mono">Total Files</p>
              <p className="text-2xl font-bold text-bitcoin-orange font-mono">
                {mockVictims.reduce((sum, v) => sum + v.filesEncrypted, 0).toLocaleString()}
              </p>
            </div>
          </div>
          <div className="mt-2 text-xs text-bitcoin-orange/60 font-mono">
            ~{(mockVictims.reduce((sum, v) => sum + v.filesEncrypted, 0) * 2.4).toFixed(1)} GB
          </div>
        </Card>

        <Card className="bg-card border-border p-4 hover:border-cyber-yellow/50 transition-all">
          <div className="flex items-center gap-3">
            <Clock className="w-8 h-8 text-cyber-yellow" />
            <div>
              <p className="text-sm text-muted-foreground font-mono">Last Poll</p>
              <p className="text-2xl font-bold text-cyber-yellow font-mono">2m</p>
            </div>
          </div>
          <div className="mt-2 text-xs text-cyber-yellow/60 font-mono">
            Avg: 3.5m interval
          </div>
        </Card>

        <Card className="bg-card border-border p-4 hover:border-cyber-green-bright/50 transition-all">
          <div className="flex items-center gap-3">
            <Terminal className="w-8 h-8 text-cyber-green-bright" />
            <div>
              <p className="text-sm text-muted-foreground font-mono">Commands</p>
              <p className="text-2xl font-bold text-cyber-green-bright font-mono">{commandLog.length}</p>
            </div>
          </div>
          <div className="mt-2 text-xs text-cyber-green-bright/60 font-mono">
            Success rate: 100%
          </div>
        </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Victim List */}
        <Card className="bg-card border-border p-6">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl font-bold text-cyber-green-bright font-mono flex items-center gap-2">
              <Activity className="w-5 h-5" />
              Victim List (Mock Data)
            </h2>
            <Badge variant="outline" className="font-mono">
              {mockVictims.length} Total
            </Badge>
          </div>
          
          <div className="space-y-3">
            {mockVictims.map((victim) => (
              <div
                key={victim.id}
                className={`p-4 border rounded-lg cursor-pointer transition-colors font-mono ${
                  selectedVictim === victim.id
                    ? "border-cyber-green bg-cyber-green/10"
                    : "border-border hover:border-cyber-green/50"
                }`}
                onClick={() => setSelectedVictim(victim.id)}
              >
                <div className="flex items-center justify-between mb-2">
                  <span className="font-bold text-cyber-green">{victim.id}</span>
                  <Badge variant={victim.status === "active" ? "default" : "secondary"}>
                    {victim.status}
                  </Badge>
                </div>
                <div className="text-sm space-y-1 text-muted-foreground">
                  <p>Device: {victim.deviceModel}</p>
                  <p>IP: {victim.ipAddress}</p>
                  <p>Files: {victim.filesEncrypted}</p>
                  <p>Last Poll: {victim.lastPoll}</p>
                </div>
              </div>
            ))}
          </div>
        </Card>

        {/* Command Panel */}
        <div className="space-y-6">
          <Card className="bg-card border-border p-6 border-cyber-green/30">
            <h2 className="text-xl font-bold mb-4 text-cyber-green-bright font-mono flex items-center gap-2">
              <Terminal className="w-5 h-5 animate-pulse" />
              Command Execution (Simulated)
            </h2>

            {selectedVictim ? (
              <div className="space-y-4">
                <p className="text-sm text-muted-foreground font-mono">
                  Selected: <span className="text-cyber-green font-bold">{selectedVictim}</span>
                </p>

                <div className="space-y-3">
                  <Button
                    onClick={() => executeSimulatedCommand("DECRYPT", selectedVictim)}
                    className="w-full font-mono"
                    variant="default"
                  >
                    [SIM] Send Decrypt Command
                  </Button>

                  <Button
                    onClick={() => executeSimulatedCommand("UPDATE_NOTE", selectedVictim)}
                    className="w-full font-mono"
                    variant="secondary"
                  >
                    <FileText className="w-4 h-4 mr-2" />
                    [SIM] Update Ransom Note
                  </Button>

                  <Button
                    onClick={() => executeSimulatedCommand("WIPE", selectedVictim)}
                    className="w-full font-mono bg-warning-red/20 hover:bg-warning-red/30 text-warning-red border-warning-red"
                    variant="outline"
                  >
                    <Trash2 className="w-4 h-4 mr-2" />
                    [SIM] Wipe Command
                  </Button>
                </div>

                <div className="mt-4 p-3 bg-muted/50 rounded border border-border">
                  <p className="text-xs text-muted-foreground font-mono">
                    ⚠️ All commands are simulated. No actual network traffic or file operations occur.
                  </p>
                </div>
              </div>
            ) : (
              <p className="text-muted-foreground font-mono text-sm">
                Select a victim from the list to execute simulated commands
              </p>
            )}
          </Card>

          {/* Command Log */}
          <Card className="bg-card border-border p-6">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-xl font-bold text-cyber-green-bright font-mono flex items-center gap-2">
                <Clock className="w-5 h-5" />
                Command Log
              </h2>
              <Badge variant="secondary" className="font-mono text-xs">
                Live Activity
              </Badge>
            </div>

            <div className="space-y-2 max-h-64 overflow-y-auto">
              {commandLog.length === 0 ? (
                <p className="text-muted-foreground font-mono text-sm">No commands executed yet</p>
              ) : (
                commandLog.map((log, idx) => (
                  <div key={idx} className="p-2 bg-muted/30 rounded border border-border text-xs font-mono">
                    <span className="text-cyber-yellow">[{log.time}]</span>{" "}
                    <span className="text-cyber-green">{log.victim}</span>:{" "}
                    <span className="text-foreground">{log.action}</span>
                  </div>
                ))
              )}
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default AdminPanel;