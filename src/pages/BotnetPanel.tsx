import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { useToast } from "@/hooks/use-toast";
import { Shield, Globe, Server, Wifi, Terminal, Play, Pause, AlertTriangle } from "lucide-react";

// Mock botnet data for educational demonstration
const mockBots = [
  {
    id: "BOT-001",
    country: "United States",
    ip: "203.0.113.45",
    status: "online",
    uptime: "3h 24m",
    cpu: "Intel i5",
    bandwidth: "100 Mbps"
  },
  {
    id: "BOT-002",
    country: "Germany",
    ip: "198.51.100.78",
    status: "online",
    uptime: "1h 15m",
    cpu: "AMD Ryzen",
    bandwidth: "500 Mbps"
  },
  {
    id: "BOT-003",
    country: "Japan",
    ip: "192.0.2.156",
    status: "offline",
    uptime: "N/A",
    cpu: "Intel i7",
    bandwidth: "250 Mbps"
  },
  {
    id: "BOT-004",
    country: "Brazil",
    ip: "203.0.113.92",
    status: "online",
    uptime: "5h 47m",
    cpu: "AMD Ryzen",
    bandwidth: "150 Mbps"
  },
];

const BotnetPanel = () => {
  const { toast } = useToast();
  const [selectedBots, setSelectedBots] = useState<string[]>([]);
  const [activityLog, setActivityLog] = useState<Array<{ time: string; action: string; bots: number }>>([]);

  const executeSimulatedCommand = (action: string) => {
    if (selectedBots.length === 0) {
      toast({
        title: "No Bots Selected",
        description: "Please select at least one bot to execute commands",
        variant: "destructive"
      });
      return;
    }

    const timestamp = new Date().toLocaleTimeString();
    setActivityLog(prev => [{
      time: timestamp,
      action: action,
      bots: selectedBots.length
    }, ...prev].slice(0, 10));

    toast({
      title: "⚠️ SIMULATED COMMAND",
      description: `Action: ${action} | Bots: ${selectedBots.length} | This is a SAFE SIMULATION - no actual commands executed`,
    });
  };

  const toggleBotSelection = (botId: string) => {
    setSelectedBots(prev => 
      prev.includes(botId) 
        ? prev.filter(id => id !== botId)
        : [...prev, botId]
    );
  };

  const selectAllBots = () => {
    setSelectedBots(mockBots.filter(b => b.status === "online").map(b => b.id));
  };

  const deselectAllBots = () => {
    setSelectedBots([]);
  };

  return (
    <div className="min-h-screen bg-terminal-bg text-cyber-green p-6">
      {/* Educational Warning Banner */}
      <div className="mb-6 p-4 border-2 border-warning-red bg-warning-red/10 rounded-lg animate-pulse">
        <div className="flex items-center gap-2 text-warning-red font-mono">
          <Shield className="w-5 h-5" />
          <span className="font-bold">EDUCATIONAL SIMULATION ONLY - SECURITY AWARENESS TRAINING</span>
        </div>
        <p className="text-warning-red/80 text-sm mt-2 font-mono">
          This is a safe, simulated botnet control panel for understanding cybersecurity threats. All data is fake. No actual bots exist. No real commands are executed.
        </p>
      </div>

      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-2 text-cyber-green-bright font-mono flex items-center gap-3">
          [SIMULATED] Botnet Control Panel
          <Badge variant="outline" className="font-mono">
            EDUCATIONAL DEMO
          </Badge>
        </h1>
        <p className="text-muted-foreground font-mono text-sm">
          Understanding botnet infrastructure for cybersecurity education
        </p>
      </div>

      {/* Dashboard Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
        <Card className="bg-card border-border p-4 hover:border-cyber-green/50 transition-all">
          <div className="flex items-center gap-3">
            <Globe className="w-8 h-8 text-cyber-green animate-pulse" />
            <div>
              <p className="text-sm text-muted-foreground font-mono">Total Bots</p>
              <p className="text-2xl font-bold text-cyber-green font-mono">{mockBots.length}</p>
            </div>
          </div>
          <div className="mt-2 text-xs text-cyber-green/60 font-mono">
            {mockBots.filter(b => b.status === "online").length} online
          </div>
        </Card>

        <Card className="bg-card border-border p-4 hover:border-bitcoin-orange/50 transition-all">
          <div className="flex items-center gap-3">
            <Server className="w-8 h-8 text-bitcoin-orange" />
            <div>
              <p className="text-sm text-muted-foreground font-mono">Selected</p>
              <p className="text-2xl font-bold text-bitcoin-orange font-mono">{selectedBots.length}</p>
            </div>
          </div>
          <div className="mt-2 text-xs text-bitcoin-orange/60 font-mono">
            Ready for commands
          </div>
        </Card>

        <Card className="bg-card border-border p-4 hover:border-cyber-yellow/50 transition-all">
          <div className="flex items-center gap-3">
            <Wifi className="w-8 h-8 text-cyber-yellow" />
            <div>
              <p className="text-sm text-muted-foreground font-mono">Avg Bandwidth</p>
              <p className="text-2xl font-bold text-cyber-yellow font-mono">250</p>
            </div>
          </div>
          <div className="mt-2 text-xs text-cyber-yellow/60 font-mono">
            Mbps combined
          </div>
        </Card>

        <Card className="bg-card border-border p-4 hover:border-cyber-green-bright/50 transition-all">
          <div className="flex items-center gap-3">
            <Terminal className="w-8 h-8 text-cyber-green-bright" />
            <div>
              <p className="text-sm text-muted-foreground font-mono">Commands</p>
              <p className="text-2xl font-bold text-cyber-green-bright font-mono">{activityLog.length}</p>
            </div>
          </div>
          <div className="mt-2 text-xs text-cyber-green-bright/60 font-mono">
            Simulated only
          </div>
        </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Bot List */}
        <Card className="bg-card border-border p-6">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl font-bold text-cyber-green-bright font-mono flex items-center gap-2">
              <Globe className="w-5 h-5" />
              Bot Network (Mock Data)
            </h2>
            <div className="flex gap-2">
              <Button 
                size="sm" 
                variant="outline" 
                onClick={selectAllBots}
                className="font-mono text-xs"
              >
                Select All
              </Button>
              <Button 
                size="sm" 
                variant="outline" 
                onClick={deselectAllBots}
                className="font-mono text-xs"
              >
                Deselect All
              </Button>
            </div>
          </div>
          
          <div className="space-y-3 max-h-[500px] overflow-y-auto">
            {mockBots.map((bot) => (
              <div
                key={bot.id}
                className={`p-4 border rounded-lg cursor-pointer transition-colors font-mono ${
                  selectedBots.includes(bot.id)
                    ? "border-cyber-green bg-cyber-green/10"
                    : "border-border hover:border-cyber-green/50"
                } ${bot.status === "offline" ? "opacity-50" : ""}`}
                onClick={() => bot.status === "online" && toggleBotSelection(bot.id)}
              >
                <div className="flex items-center justify-between mb-2">
                  <span className="font-bold text-cyber-green">{bot.id}</span>
                  <Badge variant={bot.status === "online" ? "default" : "secondary"}>
                    {bot.status}
                  </Badge>
                </div>
                <div className="text-sm space-y-1 text-muted-foreground">
                  <p>Country: {bot.country}</p>
                  <p>IP: {bot.ip}</p>
                  <p>CPU: {bot.cpu}</p>
                  <p>Bandwidth: {bot.bandwidth}</p>
                  <p>Uptime: {bot.uptime}</p>
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

            <div className="mb-4 p-3 bg-warning-red/10 border border-warning-red/30 rounded">
              <div className="flex items-center gap-2 text-warning-red text-sm font-mono">
                <AlertTriangle className="w-4 h-4" />
                <span>Selected Bots: {selectedBots.length}</span>
              </div>
            </div>

            <div className="space-y-3">
              <Button
                onClick={() => executeSimulatedCommand("PING_TEST")}
                className="w-full font-mono"
                variant="default"
                disabled={selectedBots.length === 0}
              >
                <Play className="w-4 h-4 mr-2" />
                [SIM] Ping Test
              </Button>

              <Button
                onClick={() => executeSimulatedCommand("UPDATE_CONFIG")}
                className="w-full font-mono"
                variant="secondary"
                disabled={selectedBots.length === 0}
              >
                <Server className="w-4 h-4 mr-2" />
                [SIM] Update Configuration
              </Button>

              <Button
                onClick={() => executeSimulatedCommand("COLLECT_DATA")}
                className="w-full font-mono"
                variant="outline"
                disabled={selectedBots.length === 0}
              >
                <Terminal className="w-4 h-4 mr-2" />
                [SIM] Data Collection
              </Button>

              <Button
                onClick={() => executeSimulatedCommand("SHUTDOWN")}
                className="w-full font-mono bg-warning-red/20 hover:bg-warning-red/30 text-warning-red border-warning-red"
                variant="outline"
                disabled={selectedBots.length === 0}
              >
                <Pause className="w-4 h-4 mr-2" />
                [SIM] Shutdown Bot
              </Button>
            </div>

            <div className="mt-4 p-3 bg-muted/50 rounded border border-border">
              <p className="text-xs text-muted-foreground font-mono">
                ⚠️ All commands are simulated. No actual network traffic, bot communication, or operations occur. This is purely educational.
              </p>
            </div>
          </Card>

          {/* Activity Log */}
          <Card className="bg-card border-border p-6">
            <h2 className="text-xl font-bold mb-4 text-cyber-green-bright font-mono flex items-center gap-2">
              <Terminal className="w-5 h-5" />
              Activity Log
            </h2>

            <div className="space-y-2 max-h-64 overflow-y-auto">
              {activityLog.length === 0 ? (
                <p className="text-muted-foreground font-mono text-sm">No commands executed yet</p>
              ) : (
                activityLog.map((log, idx) => (
                  <div key={idx} className="p-2 bg-muted/30 rounded border border-border text-xs font-mono">
                    <span className="text-cyber-yellow">[{log.time}]</span>{" "}
                    <span className="text-cyber-green">{log.bots} bots</span>:{" "}
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

export default BotnetPanel;
