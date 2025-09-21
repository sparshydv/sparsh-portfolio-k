import {
  Linkedin,
  Github,
  Instagram,
  Code,
  Twitter,
  ExternalLink,
} from "lucide-react";

const socialLinks = [
  {
    name: "LinkedIn",
    displayName: "Let's Connect",
    subText: "@sparshydv",
    icon: Linkedin,
    url: "https://www.linkedin.com/in/sparshydv/",
    color: "#0A66C2",
    gradient: "from-[#0A66C2] to-[#0077B5]",
  },
  {
    name: "GitHub",
    displayName: "GitHub",
    subText: "@sparshydv",
    icon: Github,
    url: "https://github.com/sparshydv",
    color: "#333",
    gradient: "from-[#333] to-[#24292e]",
  },
  {
    name: "Instagram",
    displayName: "Instagram",
    subText: "Instagram Profile",
    icon: Instagram,
    url: "/",
    color: "#E4405F",
    gradient: "from-[#833AB4] via-[#E4405F] to-[#FCAF45]",
  },
  {
    name: "Twitter",
    displayName: "X / Twitter",
    subText: "@Sparsh__Yadav",
    icon: Twitter,
    url: "https://x.com/Sparsh__Yadav",
    color: "#1DA1F2",
    gradient: "from-[#1DA1F2] to-[#0D8ECF]",
  },
  {
    name: "LeetCode",
    displayName: "LeetCode",
    subText: "Coding Profile",
    icon: Code,
    url: "https://leetcode.com/u/Sparsh_Yadav/",
    color: "#FFA116",
    gradient: "from-[#FFA116] to-[#FFCC00]",
  },
  {
    name: "GeeksforGeeks",
    displayName: "GFG",
    subText: "Coding Profile",
    icon: Code,
    url: "https://www.geeksforgeeks.org/user/sparshya4hw9/?_gl=1*1y6lqh0*_up*MQ..*_gs*MQ..&gclid=CjwKCAjwwe2_BhBEEiwAM1I7sW5b9gsciCM0bnm5o9mZ1cFw65FTMMaidnpxJAu5C2-vnzkL8S1CzRoC5OsQAvD_BwE",
    color: "#2F8D46",
    gradient: "from-[#2F8D46] to-[#1F5F30]",
  },
];

const SocialLinks = () => {
  return (
    <div className="w-full bg-gradient-to-br from-white/10 to-white/5 rounded-2xl p-6 py-8 backdrop-blur-xl">
      <h3 className="text-xl font-semibold text-white mb-6 flex items-center gap-2">
        <span className="inline-block w-8 h-1 bg-indigo-500 rounded-full"></span>
        My Profiles
      </h3>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {socialLinks.map((link) => (
          <a
            key={link.name}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative flex items-center gap-3 p-4 rounded-xl 
                       bg-white/5 border border-white/10 overflow-hidden
                       hover:border-white/20 transition-all duration-500"
          >
            <div
              className={`absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-500
                          bg-gradient-to-r ${link.gradient}`}
            />

            <div className="relative flex items-center justify-center">
              <div
                className="absolute inset-0 opacity-20 rounded-lg transition-all duration-500
                           group-hover:scale-125 group-hover:opacity-30"
                style={{ backgroundColor: link.color }}
              />
              <div className="relative p-2 rounded-lg">
                <link.icon
                  className="w-5 h-5 transition-all duration-500 group-hover:scale-110"
                  style={{ color: link.color }}
                />
              </div>
            </div>

            {/* Text Container */}
            <div className="flex flex-col min-w-0">
              <span className="text-sm font-bold text-gray-200 group-hover:text-white transition-colors duration-300">
                {link.displayName}
              </span>
              <span className="text-xs text-gray-400 truncate group-hover:text-gray-300 transition-colors duration-300">
                {link.subText}
              </span>
            </div>

            <ExternalLink
              className="w-4 h-4 text-gray-500 group-hover:text-white ml-auto
                                      opacity-0 group-hover:opacity-100 transition-all duration-300
                                      transform group-hover:translate-x-0 -translate-x-2"
            />
          </a>
        ))}
      </div>
    </div>
  );
};

export default SocialLinks;
