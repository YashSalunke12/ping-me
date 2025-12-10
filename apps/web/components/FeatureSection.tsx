import { AuroraText } from "@workspace/ui/components/aurora-text";
import { Clock, Globe, MessageSquare, Shield, Users, Zap } from "lucide-react";

export default function FeaturesSection() {
  const features = [
    {
      icon: Zap,
      title: "Lightning Fast",
      description:
        "Create rooms and start chatting in seconds with our blazing-fast infrastructure.",
    },
    {
      icon: Shield,
      title: "Secure & Private",
      description:
        "End-to-end encryption ensures your conversations stay private and secure.",
    },
    {
      icon: Users,
      title: "Multi-User Rooms",
      description:
        "Invite unlimited users to your chat rooms for group conversations.",
    },
    {
      icon: Clock,
      title: "Real-time Updates",
      description:
        "Experience seamless real-time messaging with instant delivery.",
    },
    {
      icon: Globe,
      title: "Cross-Platform",
      description: "Access your chats from any device, anywhere in the world.",
    },
    {
      icon: MessageSquare,
      title: "Rich Messaging",
      description:
        "Share text, links, and more with our feature-rich chat interface.",
    },
  ];

  return (
    <section className="py-20 px-4 md:px-8 relative">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            Powerful Features for <AuroraText>Modern Communication</AuroraText>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Everything you need for seamless, instant communication with your
            team or friends.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <div
              key={index}
              className="p-6 bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl hover:bg-white/10 transition group"
            >
              <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition">
                <feature.icon className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-400">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
