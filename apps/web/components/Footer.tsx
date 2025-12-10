import { Mail, MessagesSquareIcon } from "lucide-react";
import Twitter from "@workspace/ui/icons/twitter";

export default function Footer() {
  return (
    <footer className="border-t border-white/10 py-12 px-4 md:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <MessagesSquareIcon className="w-6 h-6 text-purple-400" />
              <h3 className="font-bold text-xl">PING-ME</h3>
            </div>
            <p className="text-gray-400 text-sm">
              Instant chat rooms for real conversations. Simple, fast, and
              secure.
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Product</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>
                <button className="hover:text-white transition">
                  Features
                </button>
              </li>
              <li>
                <button className="hover:text-white transition">Pricing</button>
              </li>
              <li>
                <button className="hover:text-white transition">
                  Security
                </button>
              </li>
              <li>
                <button className="hover:text-white transition">Roadmap</button>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Company</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>
                <button className="hover:text-white transition">About</button>
              </li>
              <li>
                <button className="hover:text-white transition">Blog</button>
              </li>
              <li>
                <button className="hover:text-white transition">Careers</button>
              </li>
              <li>
                <button className="hover:text-white transition">Contact</button>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Legal</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>
                <button className="hover:text-white transition">Privacy</button>
              </li>
              <li>
                <button className="hover:text-white transition">Terms</button>
              </li>
              <li>
                <button className="hover:text-white transition">
                  Cookie Policy
                </button>
              </li>
              <li>
                <button className="hover:text-white transition">
                  Licenses
                </button>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-gray-400">
            © 2024 PING-ME. All rights reserved.
          </p>
          <div className="flex gap-4">
            <button className="w-10 h-10 rounded-full bg-white/5 hover:bg-white/10 transition flex items-center justify-center">
              <Twitter />
            </button>
            {/* <button className="w-10 h-10 rounded-full bg-white/5 hover:bg-white/10 transition flex items-center justify-center">
            <Github className="w-5 h-5" />
          </button>
          <button className="w-10 h-10 rounded-full bg-white/5 hover:bg-white/10 transition flex items-center justify-center">
            <Linkedin className="w-5 h-5" />
          </button> */}
            <button className="w-10 h-10 rounded-full bg-white/5 hover:bg-white/10 transition flex items-center justify-center">
              <Mail className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
