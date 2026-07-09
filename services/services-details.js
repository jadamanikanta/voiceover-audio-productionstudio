
const servicesData = {
    voiceover: {
        metaTitle: "VOX Studio | Professional Voice Over Recording Services",
        metaDesc: "Elevate your project with professional voice over recording. Studio-grade acoustics, top vocal talents, and post-production for commercials, narration, and explainer videos.",
        badge: "Voice Over Service",
        title: "Voice Over Recording",
        hero: {
            badge: "Professional Voice Over",
            title: "Bring Every Script to Life with <span class='gradient-text'>Studio-Grade</span> Voices",
            desc: "Audition elite voice talents, record in state-of-the-art acoustic booths, and receive broadcast-ready voiceovers with pristine clarity and depth. Perfect for commercials, corporate narratives, and digital campaigns.",
            bgImage: "../global-images/voiceover-bg.jpg",
            btnPrimaryText: "Book Your Session",
            btnSecondaryText: "Listen to Samples"
        },
        about: {
            title: "Expert Voice Over Production Built for Global Brands",
            paragraphs: [
                "Our voice over recording service goes beyond simple narration; we capture the emotional essence, professional authority, and brand identity of your project. Utilizing high-end condenser microphones, preamps, and fully treated booths, our engineers ensure every syllable is crystal-clear and free of ambient noise.",
                "Whether you require a warm conversational tone for an explainer video, an energetic voice for a high-impact product commercial, or a cinematic resonance for a trailer, our team of directors works with you to match the perfect talent and direct them to hit the precise tone.",
                "Every recording is delivered fully polished, edited, and leveled, meeting industry loudness standards (such as LUFS for broadcast and digital platforms). Elevate your content with a voice that connects instantly with your target audience."
            ],
            image: "../global-images/voice-over.jpg",
            checklist: [
                "Acoustically isolated vocal booths (NC-15 rating)",
                "Elite vocal chain: Neumann U87, Avalon 737, and Apollo interfaces",
                "Full commercial usage rights & broadcast licenses",
                "Professional script proofreading and timing guidance",
                "Remote directing options via Zoom, Source-Connect, or SessionLinkPRO",
                "Background music (SFX) editing & audio sync capabilities"
            ]
        },
        features: [
            { icon: "mic", title: "Premium Vocal Chain", desc: "Recorded using industry-standard microphones (Neumann U87, Sennheiser MKH416) for unmatched richness." },
            { icon: "shield-check", title: "Commercial Rights", desc: "All recordings include complete commercial and digital distribution licensing options." },
            { icon: "music", title: "Audio Syncing", desc: "We sync voice files precisely to your video timing, ensuring seamless editing on your end." },
            { icon: "ear", title: "Voice Direction", desc: "Live session direction by expert producers ensuring the right style, tone, and pronunciation." },
            { icon: "sliders", title: "Loudness Matching", desc: "Leveled to broadcast and streaming standards (EBU R128 or -14 LUFS) for optimized playback." },
            { icon: "sparkles", title: "Breath & Click Removal", desc: "Advanced editing to clean up clicks, heavy mouth sounds, and distracting breaths." },
            { icon: "globe", title: "Multilingual Talents", desc: "Access to a global network of native voice actors covering multiple languages and accents." },
            { icon: "zap", title: "Rapid Turnaround", desc: "Standard files delivered within 24 to 48 hours, with rush options available for tight schedules." }
        ],
        workflow: [
            { step: 1, title: "Script & Direction Review", desc: "We review your script, determine the target demographic, timing bounds, and lock in the voice style specs." },
            { step: 2, title: "Talent Auditioning", desc: "We present a curated shortlist of voice actors matching your required gender, accent, and style specs." },
            { step: 3, title: "Studio Session", desc: "Recording in our acoustic booths with active direction, making sure we capture multiple takes and variations." },
            { step: 4, title: "De-noising & Cleanup", desc: "Our engineers edit out unwanted noises, clicks, pops, and optimize spacing to keep narration fluid." },
            { step: 5, title: "EQ & Compression", desc: "Applying professional equalizers and dynamic compressors to give the voice warmth, authority, and presence." },
            { step: 6, title: "Final QC Review", desc: "A senior sound editor reviews the complete audio file against the master script to guarantee zero omissions." },
            { step: 7, title: "Secure Delivery", desc: "We output broadcast-ready WAV and MP3 files, fully split, labeled, and delivered straight to your inbox." }
        ],
        gallery: [
            { url: "https://images.unsplash.com/photo-1590602847861-f357a9332bbc?q=80&w=600&auto=format&fit=crop", caption: "Neumann Studio Microphone" },
            { url: "https://images.unsplash.com/photo-1478737270239-2f02b77fc618?q=80&w=600&auto=format&fit=crop", caption: "Analogue Sound Console Mixing" },
            { url: "https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?q=80&w=600&auto=format&fit=crop", caption: "VOX Recording Control Room" },
            { url: "https://images.unsplash.com/photo-1468164016595-6108e4c60c8b?q=80&w=600&auto=format&fit=crop", caption: "Professional Vocal Booth" },
            { url: "https://images.unsplash.com/photo-1518609878373-06d740f60d8b?q=80&w=600&auto=format&fit=crop", caption: "Premium Rack Gear & Preamps" },
            { url: "https://images.unsplash.com/photo-1516280440614-37939bbacd81?auto=format&fit=crop&w=600&q=80", caption: "Acoustic Wall Panels & Condenser Mic" }
        ],
        pricing: [
            {
                name: "Starter",
                price: "₹1,999",
                period: "up to 150 words",
                popular: false,
                desc: "Ideal for short IVR systems, voice prompts, and social media videos.",
                features: [
                    "Single Voice Talent Selection",
                    "Acoustically Cleaned Mono WAV",
                    "2 Revisions Included",
                    "48-Hour Standard Delivery",
                    "Personal Project License"
                ],
                delivery: "48 Hours",
                revisions: "2 Revisions",
                support: "Email Support",
                limits: "150 Words max"
            },
            {
                name: "Professional",
                price: "₹4,999",
                period: "up to 500 words",
                popular: true,
                desc: "Perfect for commercial ads, corporate voiceovers, and explainer videos.",
                features: [
                    "Premium Voice Talent Roster",
                    "Full Mastered Stereo WAV",
                    "Unlimited Revisions",
                    "24-Hour Express Delivery",
                    "Full Commercial Rights Included",
                    "Direct Remote Session Monitoring"
                ],
                delivery: "24 Hours",
                revisions: "Unlimited",
                support: "24/7 Priority Support",
                limits: "500 Words max"
            },
            {
                name: "Enterprise",
                price: "₹11,999",
                period: "custom length",
                popular: false,
                desc: "Tailored for e-learning series, audiobooks, and major advertising campaigns.",
                features: [
                    "Celebrity & Exclusive Talents",
                    "Multi-character / Dubbing Options",
                    "Background Sound Effects Syncing",
                    "Dedicated Director & Engineer",
                    "Full Broadcast License (TV/Radio)",
                    "Lifetime Script Archive Sync"
                ],
                delivery: "3-5 Days",
                revisions: "Unlimited",
                support: "Dedicated Account Manager",
                limits: "Unlimited Words"
            }
        ],
        comparison: [
            { feature: "Microphone Quality & Acoustic Room", vox: "Neumann U87 / NC-15 Treated Studio", freelancer: "Home setup / USB Microphone", ordinary: "Untreated bedroom / Budget condenser" },
            { feature: "Voice Direction & Production", vox: "Live direction & senior engineer included", freelancer: "Self-recorded, no direction", ordinary: "Basic engineer, no creative coaching" },
            { feature: "Audio Post-Processing", vox: "Full de-click, de-breath, and broadcast EQ", freelancer: "Raw file or basic automatic filters", ordinary: "Standard compression and gate only" },
            { feature: "Commercial Rights & Licensing", vox: "Clear, document-backed buyout licenses", freelancer: "Often ambiguous or extra costs", ordinary: "Standard commercial rules only" },
            { feature: "Turnaround Reliability", vox: "Guaranteed deadlines with back-up talents", freelancer: "Risk of delayed response", ordinary: "Inconsistent scheduling" },
            { feature: "Quality Check & Supervision", vox: "Dedicated QA editor double-checks script", freelancer: "Self-assessed", ordinary: "Quick listen before export" }
        ],
        testimonials: [
            { name: "Rahul Sharma", role: "Creative Director, AdVantage Agency", image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=150&auto=format&fit=crop", rating: 5, text: "The commercial voiceover we received was spectacular. The Neumann mic clarity was obvious, and the direction matched our brand personality flawlessly. Outstanding output!" },
            { name: "Aditi Rao", role: "Founder, LearnFast E-Learning", image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=150&auto=format&fit=crop", rating: 5, text: "We had a project requiring 40 hours of training material. VOX Studio completed it ahead of schedule, with perfect pronunciation and completely consistent room acoustics." },
            { name: "Vikram Seth", role: "Lead Producer, Apex Games", image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=150&auto=format&fit=crop", rating: 5, text: "Character voice acting is tough, but the actor provided by VOX Studio gave an incredible, gritty performance. The delivery of clean split files made implementation easy." },
            { name: "Meera Nair", role: "Marketing Head, FitLife Corp", image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=150&auto=format&fit=crop", rating: 5, text: "Our YouTube commercial campaigns perform 40% better now. A premium, professional voiceover really changes how customers view the trustworthiness of your brand." },
            { name: "Karan Johar", role: "Audio Lead, CineVisuals", image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=150&auto=format&fit=crop", rating: 5, text: "remote monitoring during the recording was very stable. We directed our project from Mumbai while the talent was in the VOX studio. Exceptionally professional!" },
            { name: "Sarah Jenkins", role: "Author, StoryPress Audiobooks", image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=150&auto=format&fit=crop", rating: 5, text: "Listening to the voice file is a pure joy. There are zero background hums, zero digital artifacts, and the volume dynamics are incredibly well balanced. Recommending to everyone." }
        ],
        faqs: [
            { q: "What format will my voice over files be delivered in?", a: "We deliver files in 24-bit/48kHz WAV format, along with 320kbps MP3 copies. Custom sample rates and file split naming configurations can be set before rendering." },
            { q: "Do you include commercial rights in your price?", a: "Yes, our Professional and Enterprise plans include a full commercial buyout license, allowing you to use the audio for corporate websites, YouTube, and online marketing." },
            { q: "Can we direct the voice talent live during recording?", a: "Absolutely! We support remote direction via Zoom, Source-Connect, or phone call. This is standard in our Professional and Enterprise packages." },
            { q: "What happens if I need changes in the recording?", a: "We provide revisions. Revisions covering tone changes or artistic styling are free within your plan's limits. Rewrites to the script after recording may incur fee adjustments." },
            { q: "Can you edit out mouth clicks and breathing noises?", a: "Yes, all audio undergoes a comprehensive vocal cleaning phase. We remove mouth clicks, lip smacks, plosives, and tame breathing sounds using specialized software." },
            { q: "Do you offer background music mixing?", a: "Yes, we can source royalty-free music that matches the mood of the script and mix it behind the voice track, adjusting ducking levels so the vocal remains the core focus." },
            { q: "How do you handle accents and regional dialects?", a: "We have an extensive network of global voice talent. Whether you need standard British RP, General American, localized Indian accents, or other regional dialects, we have native speakers." },
            { q: "What is your standard turnaround time?", a: "Our standard turnaround is 24 to 48 hours for scripts under 1000 words. If you have an urgent deadline, our 24-hour rush service option will prioritize your project." },
            { q: "Are your studios soundproofed to professional specs?", a: "Yes. Our studios are professionally built with floating floors, double-wall isolation, and acoustic absorption, maintaining a noise floor below -60dB (NC-15 specification)." },
            { q: "Do you support e-learning localization projects?", a: "Yes, we handle large-scale multi-file localization, translating, recording, and splitting files with systematic filenames to fit e-learning modules." }
        ],
        cta: {
            title: "Ready to Capture Your Perfect Brand Voice?",
            desc: "Submit your script today for a free review and matching quote. Let's create an audio asset that sets your brand apart in digital media.",
            bgImage: "../global-images/voiceover-bg.jpg",
            btnPrimaryText: "Book Your Session",
            btnSecondaryText: "Contact Our Team"
        }
    },
    podcast: {
        metaTitle: "VOX Studio | Premium Podcast Editing & Mastering Services",
        metaDesc: "Take your podcast quality to the next level. Noise cleanup, multi-track mixing, sound fx, intros, and professional mastering to dominate the rankings.",
        badge: "Podcast Service",
        title: "Podcast Editing",
        hero: {
            badge: "Professional Podcast Editing",
            title: "Distraction-Free, <span class='gradient-text'>Broadcast-Ready</span> Podcast Production",
            desc: "We clean up background hums, balance dialogue levels, insert show assets, and master your episodes so they sound professional on Apple Podcasts, Spotify, and YouTube.",
            bgImage: "../global-images/podcast-editing.jpg",
            btnPrimaryText: "Polish Your Episode",
            btnSecondaryText: "Hear Before & After"
        },
        about: {
            title: "Elevate Your Podcast with Professional Audio Quality",
            paragraphs: [
                "Podcasts succeed on two criteria: great content and fatigue-free listening. Raw recordings, especially when hosted remotely over platforms like Zoom or Zencastr, suffer from room echo, unequal volume levels, overlapping talking, and digital dropouts. Our editing system fixes these flaws.",
                "Our dedicated editors manually listen to your tracks to cut out filler words ('ums', 'ahs', 'you knows'), remove awkward silence pauses, and smooth over crosstalk. We balance all hosts' volumes dynamically using compression and levels match, keeping host and guest levels equal.",
                "Finally, we clean up noise issues (room air conditioning hum, hiss, line static) and master the final mix to the international standard of -16 LUFS for stereo podcasts. You receive a clean, engaging show ready to build your subscriber base."
            ],
            image: "../global-images/audiobook.png",
            checklist: [
                "Advanced vocal de-noising & echo reduction",
                "Removal of filler words, stutters, and dead air space",
                "Multi-track audio alignment and cross-talk cleanup",
                "Seamless integration of custom intros, outros, and ad reads",
                "Loudness mastered to -16 LUFS (Stereo) / -19 LUFS (Mono)",
                "Full ID3 tagging and optimization for hosting platforms"
            ]
        },
        features: [
            { icon: "volume-2", title: "Noise Cleanup", desc: "Removes room echo, fan hums, hiss, and outdoor traffic noise using spectral repair tools." },
            { icon: "scissors", title: "Filler Word Removal", desc: "Manual surgical edits to remove distracting 'ums', 'like', 'ah', stutters, and double words." },
            { icon: "users", title: "Multi-track Balance", desc: "Separate audio files from each host/guest are leveled and sync-locked for perfect alignment." },
            { icon: "headphones", title: "Mastering for Streams", desc: "Optimizes dynamics and limiting to target standard podcast streaming levels (-16 LUFS)." },
            { icon: "sparkles", title: "Intros & Music Mix", desc: "Smooth editing of intro music, sponsorships, promotional ads, and outro elements." },
            { icon: "activity", title: "Sibilance Control", desc: "Tames harsh 'S' sounds and sharp mouth pops using dynamic de-essers and high-pass filters." },
            { icon: "file-audio", title: "Metadata Tagging", desc: "Includes show title, logo art, host, and episode info inside final metadata tags." },
            { icon: "calendar", title: "Subscription Bundles", desc: "Consistent weekly or bi-weekly output packages matching your editorial calendar schedule." }
        ],
        workflow: [
            { step: 1, title: "Asset Submission", desc: "Upload raw multi-track recordings, along with your intro, outro, music assets, and sponsor ad reads." },
            { step: 2, title: "Dialogue Cleaning", desc: "Our editors perform spectral analysis to reduce static, electronic hiss, and room reflections." },
            { step: 3, title: "Content Editing", desc: "Surgically cutting out filler words, bad takes, long pauses, and fixing accidental talk-overs." },
            { step: 4, title: "Mixing & Music Placement", desc: "We place and mix the intro/outro, lower music volume under voice points, and place commercial break tags." },
            { step: 5, title: "Mastering & Leveling", desc: "Balancing loudness to -16 LUFS, and applying subtle tube warmth so the audio sounds professional." },
            { step: 6, title: "Quality Check Listen", desc: "We listen back to the final master render at 1.5x speed to ensure transitions are smooth." },
            { step: 7, title: "Show-Ready Delivery", desc: "We deliver an ID3-tagged, optimized MP3 file along with a detailed timestamp log of edit marks." }
        ],
        gallery: [
            { url: "https://images.unsplash.com/photo-1590602847861-f357a9332bbc?q=80&w=600&auto=format&fit=crop", caption: "Premium Podcast Microphone" },
            { url: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?auto=format&fit=crop&w=600&q=80", caption: "Editing Waveforms in DAW" },
            { url: "https://images.unsplash.com/photo-1618609377864-68609b857e90?q=80&w=600&auto=format&fit=crop", caption: "Podcast Hosts Studio Recording" },
            { url: "https://images.unsplash.com/photo-1581373449483-37449f962b6c?q=80&w=600&auto=format&fit=crop", caption: "Podcast Setup with Multi-mics" },
            { url: "https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?q=80&w=600&auto=format&fit=crop", caption: "Sound Mixer Leveling Tracks" },
            { url: "https://images.unsplash.com/photo-1524678606370-a47ad25cb82a?q=80&w=600&auto=format&fit=crop", caption: "Headphones and Editing Software" }
        ],
        pricing: [
            {
                name: "Starter",
                price: "₹2,499",
                period: "per episode (up to 30 mins)",
                popular: false,
                desc: "Great for solo creators and simple Q&A interview shows.",
                features: [
                    "Basic Vocal Leveling & EQ",
                    "Intro/Outro Music Mixing",
                    "Standard Noise Reduction",
                    "1 Revision Allowed",
                    "3-Day Standard Delivery",
                    "Up to 30 Minutes Raw Audio"
                ],
                delivery: "3 Days",
                revisions: "1 Revision",
                support: "Email Support",
                limits: "30 Minutes max"
            },
            {
                name: "Professional",
                price: "₹5,499",
                period: "per episode (up to 60 mins)",
                popular: true,
                desc: "The sweet spot for business podcasts and professional panel shows.",
                features: [
                    "Full Multi-track Editing",
                    "Filler Word & Um/Ah Removal",
                    "Advanced Spectral De-noising",
                    "Unlimited Revisions",
                    "48-Hour Rapid Delivery",
                    "Show Notes Summary & Timestamps",
                    "Up to 60 Minutes Raw Audio"
                ],
                delivery: "48 Hours",
                revisions: "Unlimited",
                support: "24/7 Slack Support",
                limits: "60 Minutes max"
            },
            {
                name: "Enterprise",
                price: "₹14,999",
                period: "monthly show management",
                popular: false,
                desc: "Full post-production management for commercial network shows.",
                features: [
                    "Up to 4 Episodes Edited Monthly",
                    "Video Podcast Editing (YouTube)",
                    "Social Media Video Clips (5 Shorts)",
                    "Dedicated Sound Designer",
                    "SEO Optimized Show Descriptions",
                    "Direct Upload to Host Platform"
                ],
                delivery: "Custom Schedule",
                revisions: "Unlimited",
                support: "Dedicated Producer & Channel",
                limits: "Unlimited Minutes"
            }
        ],
        comparison: [
            { feature: "Filler Word Cleanup", vox: "Manual, surgical removal of stutters & 'ums'", freelancer: "Often ignored, or auto-cut with errors", ordinary: "Basic global cuts, leaving artifacts" },
            { feature: "Volume Optimization", vox: "Targeted -16 LUFS output for all streaming platforms", freelancer: "Varies, often quiet or clipping", ordinary: "Simple compression template used" },
            { feature: "De-noising Capability", vox: "Advanced restoration with iZotope RX Advanced", freelancer: "Basic digital gate, causes audio dropouts", ordinary: "Simple low-cut EQ filters" },
            { feature: "Intros, Music & Ad Transitions", vox: "Custom creative placement with crossfades", freelancer: "Abrupt, harsh cut-ins", ordinary: "Generic fade-in and fade-out" },
            { feature: "Turnaround Reliability", vox: "Contractual delivery schedule for all clients", freelancer: "Subject to random delay", ordinary: "Requires multiple notifications" },
            { feature: "Promotion Snippets", vox: "Prepares audiograms/shorts with subtitles", freelancer: "Not included", ordinary: "Charged as an expensive add-on" }
        ],
        testimonials: [
            { name: "Suresh Gupta", role: "Host, The Founders Journey", image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=150&auto=format&fit=crop", rating: 5, text: "Switching to VOX Studio was a game changer. Our audio quality now matches NPR shows, and our listener retention rate jumped by 35% in just a month!" },
            { name: "Priya Mehta", role: "Marketing Director, TechPulse", image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=150&auto=format&fit=crop", rating: 5, text: "Having them edit our corporate podcast saves our internal marketing team 15 hours a week. The show is always returned clean, balanced, and perfectly on schedule." },
            { name: "Nitin Saxena", role: "Host, Crypto & Beyond", image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=150&auto=format&fit=crop", rating: 5, text: "The filler word removal is incredibly natural. You cannot hear the edits at all. They clean up my guests' stutters and bad audio lines perfectly every time." },
            { name: "Ananya Sen", role: "Creator, Mindful Living", image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=150&auto=format&fit=crop", rating: 5, text: "The sound design they added, from intro music selection to transition swooshes, completely transformed the atmosphere of my show. Highly recommend professional edit." },
            { name: "David Miller", role: "Producer, Global Market Report", image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=150&auto=format&fit=crop", rating: 5, text: "Weekly delivery is crucial for our news podcast. VOX Studio has not missed a single deadline in over a year. The reliability is absolutely top tier." },
            { name: "Elena Rostova", role: "Host, Design Matters Podcast", image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=150&auto=format&fit=crop", rating: 5, text: "We record in an untreated room, but they manage to remove 95% of the echo. It sounds like we recorded in a high-end studio. Amazing work by the team!" }
        ],
        faqs: [
            { q: "How do we upload our raw audio tracks?", a: "Once you sign up, you'll get access to a private Google Drive or Dropbox folder where you can drop your files. You can also send them via WeTransfer." },
            { q: "What tracks should we submit for the best quality?", a: "Please submit separate audio tracks for each speaker (e.g., host on track 1, guest on track 2). Keeping speakers separated allows us to clean individual crosstalk and level issues." },
            { q: "Do you create show notes or timestamps?", a: "Yes, our Professional plan includes a brief summary, key topics list, and timestamp marks of interesting discussion points for social media." },
            { q: "Can you edit video podcasts for YouTube?", a: "Yes, our Enterprise tier supports full video multi-cam podcast editing, audio leveling, speaker transitions, and zoom-ins, delivered in 4K resolution." },
            { q: "What is your turnaround time for a standard episode?", a: "We deliver finished episodes within 48 hours. If you need it sooner, we have a 24-hour rush service option." },
            { q: "Do you help with podcast distribution setup?", a: "Yes, we can assist you in setting up your RSS feed with platforms like Libsyn, Buzzsprout, or Spotify for Podcasters, ensuring meta tags are set correctly." },
            { q: "What tools do you use for noise cleaning?", a: "We utilize industry-leading restoration suites like iZotope RX Advanced, FabFilter plugins, and custom hardware processors to isolate voices cleanly." },
            { q: "Can you create audio promo clips for social media?", a: "Yes! We create custom audiograms or vertical video shorts (with waveforms and animated captions) to share on Instagram, TikTok, and LinkedIn." },
            { q: "How do you handle background music selection?", a: "We help you select royalty-free music from our licensed libraries, ensuring your show is fully compliant with copyright rules on Spotify and YouTube." },
            { q: "Do you offer discounts for monthly editing commitments?", a: "Yes, we offer custom monthly retainers that discount costs by up to 20% for regular weekly shows. Contact our sales team for details." }
        ],
        cta: {
            title: "Ready to Sound Like a Top-Tier Podcast?",
            desc: "Send us a raw 10-minute clip of your podcast. We'll edit and master it for free so you can hear the professional difference.",
            bgImage: "../global-images/podcast-editing.jpg",
            btnPrimaryText: "Send Free Sample Clip",
            btnSecondaryText: "View Monthly Plans"
        }
    },
    sounddesign: {
        metaTitle: "VOX Studio | Creative Sound Design & Cinematic SFX Services",
        metaDesc: "Bespoke sound design for films, commercials, games, and UI. Cinematic layering, foley effects, and spatial audio to create immersive worlds.",
        badge: "Sound Design Service",
        title: "Sound Design",
        hero: {
            badge: "Immersive Sound Design",
            title: "Crafting Cinematic <span class='gradient-text'>Immersive Worlds</span> Through Audio",
            desc: "Custom foley, synthetic soundscapes, UI sound effects, and spatial audio designed to amplify visual impact and create deep audience immersion.",
            bgImage: "../global-images/sound-design.jpg",
            btnPrimaryText: "Design Your Soundscape",
            btnSecondaryText: "Watch Showreel"
        },
        about: {
            title: "Innovative Sound Design for Cinematic & Digital Experiences",
            paragraphs: [
                "Sound design is the invisible layer that brings storytelling to life. A high-impact sound design system gives visual elements weight, movement, and emotional context. At VOX Studio, we craft bespoke sound effects (SFX) that fit the physics, mood, and aesthetic of your digital media.",
                "Our team combines field recording, foley performance, and advanced modular synthesis. We create satisfying UI feedback sounds for app menus, immersive ambient beds for game levels, massive cinematic soundscapes for movie trailers, and detailed foley layers for product videos.",
                "Every element is carefully positioned in the frequency spectrum to prevent muddy mixes. We mix and deliver in formats ranging from standard stereo to immersive Dolby Atmos 5.1/7.1 setups, ensuring your audio translates perfectly on theaters, TV, and mobile headphones."
            ],
            image: "../global-images/animation.png",
            checklist: [
                "Bespoke foley recording and custom sound effects generation",
                "Advanced modular synthesis & organic texture layering",
                "App UI & game audio sound system architecture",
                "Stereo, 5.1, 7.1, and spatial audio mixing configurations",
                "Integration support for game engines (Wwise, FMOD, Unity, Unreal)",
                "Full compliance with cinematic and broadcast audio specifications"
            ]
        },
        features: [
            { icon: "boom-box", title: "Custom Foley Capture", desc: "Recorded foley elements using organic props to capture real-world textures and weights." },
            { icon: "sparkles", title: "Modular Synthesis", desc: "Bespoke synthetic sounds, transitions, drops, and risers built using modular synthesizers." },
            { icon: "headphones", title: "Spatial Soundscapes", desc: "Immersive 3D audio, binaural mixes, and Dolby support for headsets and home theaters." },
            { icon: "gamepad-2", title: "Game Engine Ready", desc: "Exported audio assets formatted correctly for easy import into Wwise, FMOD, Unity, or Unreal." },
            { icon: "video", title: "Cinematic Impact", desc: "Deep sub-booms, swooshes, hit markers, and ambient textures that elevate video sequences." },
            { icon: "smartphone", title: "UI Audio Systems", desc: "Consistent, pleasing click, success, fail, and notification tones for mobile app interfaces." },
            { icon: "shield", title: "Full Audio Ownership", desc: "All sound effects are 100% custom-made; no copyright strikes or copyright issues." },
            { icon: "gauge", title: "Dynamic Compression", desc: "Controlled transient design ensuring sound effects punch through music tracks cleanly." }
        ],
        workflow: [
            { step: 1, title: "Creative Concept Meet", desc: "We analyze your video, gameplay, or app specs, building a detailed cue sheet of sound markers." },
            { step: 2, title: "Foley Recording", desc: "Performers record footsteps, cloth movements, and object handling in our dedicated foley pit." },
            { step: 3, title: "Synthesizer Design", desc: "Creating futuristic sci-fi soundscapes, energy beams, or digital interface sounds using synthesizers." },
            { step: 4, title: "Dialogue Sync & Edit", desc: "Aligning sound effects frame-by-frame with your visual keyframes, making sure impacts align." },
            { step: 5, title: "Spatial Audio Mix", desc: "Panning sounds, setting reverb values, and mixing so everything has physical depth." },
            { step: 6, title: "Frequency Leveling", desc: "Equalizing the tracks so SFX do not conflict with dialogue frequencies or background music." },
            { step: 7, title: "Master Export", desc: "Exporting high-quality stems, split layers, or fully mixed tracks tailored to your playback format." }
        ],
        gallery: [
            { url: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?auto=format&fit=crop&w=600&q=80", caption: "Sound Design Keyboard Workspace" },
            { url: "https://images.unsplash.com/photo-1518609878373-06d740f60d8b?q=80&w=600&auto=format&fit=crop", caption: "Cinematic Mixing Board Controls" },
            { url: "https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?q=80&w=600&auto=format&fit=crop", caption: "Foley Studio Recording Setup" },
            { url: "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?q=80&w=600&auto=format&fit=crop", caption: "Vinyl Player & Audio Mechanics" },
            { url: "https://images.unsplash.com/photo-1511379938547-c1f69419868d?q=80&w=600&auto=format&fit=crop", caption: "Bespoke Synthesizer Patches" },
            { url: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?q=80&w=600&auto=format&fit=crop", caption: "Synthesizer Controls & Lighting" }
        ],
        pricing: [
            {
                name: "Starter",
                price: "₹3,999",
                period: "per video (up to 2 mins)",
                popular: false,
                desc: "Ideal for short brand ads, logo intros, and social media videos.",
                features: [
                    "Bespoke UI and Impact Sound Effects",
                    "Stereo High-Quality WAV Output",
                    "2 Revisions Included",
                    "3-Day Delivery Turnaround",
                    "Foley Sync to Key Video Frames"
                ],
                delivery: "3 Days",
                revisions: "2 Revisions",
                support: "Email Support",
                limits: "2 Minutes max"
            },
            {
                name: "Professional",
                price: "₹8,999",
                period: "per project (up to 5 mins)",
                popular: true,
                desc: "Perfect for high-end cinematic trailers, game intros, and explainer videos.",
                features: [
                    "Bespoke Foley & Synthetic SFX Layering",
                    "Full Dynamic Stereo & 5.1 Surround Mix",
                    "Unlimited Revision Requests",
                    "48-Hour Rush Option Included",
                    "Exported Stem Splits (Voice, SFX, Ambient)",
                    "Dedicated Sound Designer Assigned"
                ],
                delivery: "48 Hours",
                revisions: "Unlimited",
                support: "24/7 Slack & Phone Support",
                limits: "5 Minutes max"
            },
            {
                name: "Enterprise",
                price: "₹24,999",
                period: "full custom production",
                popular: false,
                desc: "Tailored for full game audio design, short movies, and VR experiences.",
                features: [
                    "Complete Audio Integration (FMOD/Wwise)",
                    "Dolby Atmos 7.1 Immersive Mix",
                    "Exclusive Proprietary Sound Libraries",
                    "Unlimited Minutes of Screen Content",
                    "Re-recording Mixer Consultation",
                    "Lifetime Asset License Ownership"
                ],
                delivery: "Flexible Schedule",
                revisions: "Unlimited",
                support: "Dedicated Project Supervisor",
                limits: "Custom Limits"
            }
        ],
        comparison: [
            { feature: "Bespoke SFX Generation", vox: "100% custom recorded foley and synthesized elements", freelancer: "Usage of generic pre-made stock libraries", ordinary: "Re-used templates and common sound packs" },
            { feature: "Surround Audio Mix Options", vox: "Stereo, 5.1, 7.1, and Dolby spatial configurations", freelancer: "Standard basic stereo mixes only", ordinary: "Stereo with software-based wideners" },
            { feature: "Visual Alignment Accuracy", vox: "Frame-accurate transient placement using high-end DAWs", freelancer: "Rough timeline placement, causing visual lag", ordinary: "Standard alignment with minimal detail adjustment" },
            { feature: "Stem Output Separation", vox: "Delivered in multi-stems (Foley, Impact, Ambient, Sub)", freelancer: "Single bounced flat master audio track only", ordinary: "Basic dialog and music/SFX spit options" },
            { feature: "Engine Implementation Support", vox: "Wwise/FMOD file tagging and event mapping", freelancer: "No game engine knowledge", ordinary: "Plain WAV files with no middleware metadata" },
            { feature: "Copyright Integrity", vox: "Full custom contract guarantees zero copyright issues", freelancer: "High risk of royalty claims from stock lists", ordinary: "Basic usage rights with restrictions" }
        ],
        testimonials: [
            { name: "Rohit Sen", role: "Lead Developer, IndieQuest Games", image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=150&auto=format&fit=crop", rating: 5, text: "The custom UI click and weapon reload sounds they built fit our sci-fi aesthetic perfectly. The team delivered FMOD event files that plugged right into Unity!" },
            { name: "Divya Kapoor", role: "Director, FrameWorks Films", image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=150&auto=format&fit=crop", rating: 5, text: "We submitted a cinematic trailer with zero sound. VOX Studio built a terrifying, bass-heavy foley and synthetic track that completely wowed our executive team." },
            { name: "Siddharth Roy", role: "Product Manager, Apex Mobile", image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=150&auto=format&fit=crop", rating: 5, text: "Designing audio for apps is tough — sounds must be satisfying without being annoying. The success/fail tones they created are incredibly polished and brand-aligned." },
            { name: "Elena Petrova", role: "Marketing Lead, Horizon Agency", image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=150&auto=format&fit=crop", rating: 5, text: "The sound design for our product launch video was remarkable. Simple animations of our smart lock felt high-end and premium because of their click and mechanical sounds." },
            { name: "Marcus Thorne", role: "Creative Director, VR Reality Studio", image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=150&auto=format&fit=crop", rating: 5, text: "Immersive VR projects demand spatial binaural audio. VOX Studio's 3D soundscapes provided a sense of height and rear positioning that made the virtual space feel real." },
            { name: "Lisa Wong", role: "Executive Producer, CineMax Animations", image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=150&auto=format&fit=crop", rating: 5, text: "Their foley performance for our cartoon series was creative. They recorded everyday items like vegetables and plastic toys to make funny, detailed character sound fx." }
        ],
        faqs: [
            { q: "What is foley recording, and do I need it?", a: "Foley recording is the process of recreating everyday sounds (like footsteps, rustling clothes, clinking glasses) to sync with visuals. It is essential to make movies and videos feel lifelike." },
            { q: "Do you use stock sound effects library files?", a: "While we have access to massive commercial databases, our signature is recording custom sound elements specifically for your project. This guarantees unique soundscapes." },
            { q: "Can you deliver surround sound formats?", a: "Yes, we support mixing and mastering in 5.1 and 7.1 surround sound formats, as well as binaural (3D head-tracking) audio files for virtual reality." },
            { q: "How do you align sound effects to our animation frames?", a: "We work directly within professional video-synced DAWs. You provide your video in MP4/MOV formats, and we output sound files aligned to the exact microsecond." },
            { q: "Can you configure sound events for game middleware?", a: "Yes, we can prepare assets and build sound banks inside Wwise or FMOD, configuring parameters such as occlusion, distance attenuation, and random pitch variations." },
            { q: "What files do you deliver upon completion?", a: "We deliver the fully mixed audio track, along with individual stem tracks (e.g., Foley stem, Ambient stem, Action SFX stem, Sub-bass stem) in 24-bit WAV format." },
            { q: "Can you make UI sounds for mobile apps?", a: "Absolutely. We design notification tones, button confirmation sounds, success chimes, and failure warning tones optimized for phone speakers." },
            { q: "How do revisions work for sound design?", a: "You can point out changes on specific video timestamps. We edit, re-layer, or swap sounds based on your notes to match your visual direction." },
            { q: "Is the sound design license royalty-free?", a: "Yes. Once you pay for our service, the sound design is yours. You can distribute the project globally on TV, theater, web, or consoles with zero recurring royalties." },
            { q: "What video formats should I export for you?", a: "Please export your video in MP4 or MOV with a visible timecode overlay. Lower resolution files (e.g., 720p or 1080p) are preferred to speed up transfer." }
        ],
        cta: {
            title: "Ready to Supercharge Your Visuals with Custom SFX?",
            desc: "Send us a sequence from your project today. Our engineers will review and advise on the ideal foley, ambient, and impact layering necessary.",
            bgImage: "../global-images/sound-design.jpg",
            btnPrimaryText: "Consult Our Sound Team",
            btnSecondaryText: "View Sound Showreel"
        }
    },
    music: {
        metaTitle: "VOX Studio | Custom Music Production & Commercial Beats",
        metaDesc: "Bespoke music composition, arrangements, mixing, and mastering. Custom commercial soundtracks, corporate themes, and digital beats tailored to your brand.",
        badge: "Music Production Service",
        title: "Music Production",
        hero: {
            badge: "Bespoke Music Production",
            title: "Compose Your Brand's Identity with <span class='gradient-text'>Original Soundtracks</span>",
            desc: "Custom audio branding, epic trailer scores, commercial jingles, and modern digital compositions crafted from scratch by award-winning music producers.",
            bgImage: "../global-images/music-production.jpg",
            btnPrimaryText: "Start Composing",
            btnSecondaryText: "Listen to Portfolio"
        },
        about: {
            title: "Premium Music Arrangement & Composition Tailored for Media",
            paragraphs: [
                "Stock music libraries are cheap, but they make your brand sound generic and lead to copyright issues. Original music composition gives your project a unique emotional arc, custom-tempo transitions, and memorable melodic themes that audiences associate only with your logo.",
                "At VOX Studio, we compose across multiple genres, including orchestral cinematic scoring, modern synthwave, urban beats, organic acoustic arrangements, and corporate acoustic-pop. Our team utilizes real acoustic instruments, high-end virtual orchestras, and vintage analog gear.",
                "We compositionally structure each track to complement your script voiceover, ensuring the music ducks dynamically and builds to a climax at the perfect visual hook. The output is a professional stereo or surround mix, fully mastered for streaming, web, or television."
            ],
            image: "../global-images/studio.jpg",
            checklist: [
                "Bespoke music composition across multiple modern genres",
                "Recording of real guitars, keyboards, and acoustic elements",
                "Custom sound-branding and audio logo design",
                "Surgical mixing and analog summing for maximum warmth",
                "Delivery of individual instrumental stems for dynamic editing",
                "Full copyright buyout options with zero future royalty claims"
            ]
        },
        features: [
            { icon: "music", title: "Bespoke Melodic Themes", desc: "Composing custom melodies and themes unique to your brand's emotional narrative." },
            { icon: "music-2", title: "Live Instrument Layering", desc: "Recording of real guitars, percussion, bass, and keys for organic human performance warmth." },
            { icon: "sliders", title: "Analog Summing & Mix", desc: "Summing digital tracks through analog gear to achieve depth, width, and low-end definition." },
            { icon: "sparkles", title: "Audio Logo Branding", desc: "Creating memorable 3-second sound logos that instantly identify your company trademark." },
            { icon: "shield-alert", title: "Copyright Protection", desc: "100% original composition, protecting your videos from YouTube Content ID flags and strikes." },
            { icon: "layers", title: "Arrangement Stem Splits", desc: "We deliver full splits (Drums, Bass, Synths, Leads) so your editors can rearrange parts easily." },
            { icon: "headphones", title: "Professional Mastering", desc: "Final master matched to streaming and TV target levels (-14 LUFS / -1dB True Peak limit)." },
            { icon: "clock", title: "Tempo Map Syncing", desc: "Music speeds up, breaks, or builds at specific timestamps of your video cut point." }
        ],
        workflow: [
            { step: 1, title: "Creative Briefing", desc: "We discuss reference tracks, the desired emotional arc, target tempo, and instruments preferences." },
            { step: 2, title: "Melody Sketching", desc: "Composing a basic piano/guitar chord sketch to align on the core melody and hook ideas." },
            { step: 3, title: "Arrangement Building", desc: "Building the full arrangement, layering drums, synthesizers, orchestral textures, and strings." },
            { step: 4, title: "Live Overdub Session", desc: "Recording live studio musicians to replace digital tracks, adding human swing and feel." },
            { step: 5, title: "Mixing Phase", desc: "Balancing frequency bands, carving space for vocals, and applying spatial stereo effects." },
            { step: 6, title: "Stereo Mastering", desc: "Summing, leveling, and applying analog limiting for punch, volume consistency, and depth." },
            { step: 7, title: "Full Stem Delivery", desc: "Delivering the stereo master, instrumental-only version, cutdowns (30s, 15s), and split stems." }
        ],
        gallery: [
            { url: "https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?q=80&w=600&auto=format&fit=crop", caption: "Mixing Console Faders" },
            { url: "https://images.unsplash.com/photo-1511379938547-c1f69419868d?q=80&w=600&auto=format&fit=crop", caption: "Studio Guitar & Synth Keys" },
            { url: "https://images.unsplash.com/photo-1518609878373-06d740f60d8b?q=80&w=600&auto=format&fit=crop", caption: "Music Producer composition desk" },
            { url: "https://images.unsplash.com/photo-1507838153414-b4b713384a76?q=80&w=600&auto=format&fit=crop", caption: "Synthesizer Racks Setup" },
            { url: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?q=80&w=600&auto=format&fit=crop", caption: "Keyboard Keys & Studio Mood Lights" },
            { url: "https://images.unsplash.com/photo-1468164016595-6108e4c60c8b?q=80&w=600&auto=format&fit=crop", caption: "Studio Vocalist recording track" }
        ],
        pricing: [
            {
                name: "Starter",
                price: "₹6,999",
                period: "per jingle (up to 30s)",
                popular: false,
                desc: "Great for video intros, podcast theme songs, and short audio logos.",
                features: [
                    "Bespoke 30-Second Composition",
                    "Professional Mix & Master Stereo WAV",
                    "2 Composition Revisions",
                    "5-Day Delivery",
                    "Standard Digital Licensing Rights"
                ],
                delivery: "5 Days",
                revisions: "2 Revisions",
                support: "Email Support",
                limits: "30 Seconds max"
            },
            {
                name: "Professional",
                price: "₹14,999",
                period: "per track (up to 3 mins)",
                popular: true,
                desc: "Perfect for commercial ads, custom corporate anthems, and trailer music compositions.",
                features: [
                    "Bespoke Full Composition (up to 3 mins)",
                    "Live Guitar/Percussion Overdubs",
                    "Full Stem Exports (Drums, Melodic, Bass)",
                    "Unlimited Revision Loops",
                    "Full Exclusive Copyright Buyout",
                    "Cutdown Versions (15s, 30s, 60s) Included"
                ],
                delivery: "7 Days",
                revisions: "Unlimited",
                support: "24/7 Slack & Video Call Monitoring",
                limits: "3 Minutes max"
            },
            {
                name: "Enterprise",
                price: "₹34,999",
                period: "full score production",
                popular: false,
                desc: "For video game soundtracks, film scores, and comprehensive sonic branding bundles.",
                features: [
                    "Up to 10 Composition Minutes",
                    "Live String Section Recording",
                    "Full Interactive Loop Splits",
                    "Dedicated Composing Director",
                    "Unlimited Revisions & Lifetime Updates",
                    "Global Broadcast & Theater Rights"
                ],
                delivery: "Flexible Schedule",
                revisions: "Unlimited",
                support: "Dedicated Composition Team",
                limits: "Custom Length"
            }
        ],
        comparison: [
            { feature: "Originality & Identity", vox: "100% original compositions written for your brand only", freelancer: "Varies, often builds over pre-purchased templates", ordinary: "Re-arranging cheap royalty-free stock loops" },
            { feature: "Copyright Guarantee", vox: "Contract-backed full buyout, no YouTube copyright issues", freelancer: "Risk of copyright flags from shared loops", ordinary: "Complex licenses with user count limits" },
            { feature: "Mixing & Summing Quality", vox: "Summed via high-end analogue SSL or Neve summing boxes", freelancer: "In-the-box digital mix with narrow field", ordinary: "Basic limiting presets applied on master" },
            { feature: "Stem Deliverables", vox: "Detailed instrument splits for flexible video adaptation", freelancer: "Usually charges extra or outputs a single track", ordinary: "Flat stereo mix only" },
            { feature: "Live Instrument Layering", vox: "Real guitar, bass, and synth overdubbing included", freelancer: "Relies completely on software MIDI synths", ordinary: "Relies completely on software MIDI synths" },
            { feature: "Integration with Script Voiceover", vox: "Arranged so music notes build and dip around voice frequencies", freelancer: "Flat volume, clashes with speaker's tone", ordinary: "Uses simple volume automation, no EQ cuts" }
        ],
        testimonials: [
            { name: "Anita Desai", role: "Creative Director, BrandBuilders Agency", image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=150&auto=format&fit=crop", rating: 5, text: "The custom corporate theme composed by VOX Studio gave our brand launch an emotional weight that left clients in tears. Complete masterpiece!" },
            { name: "Pranav Shah", role: "Founder, Zenith Tech", image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=150&auto=format&fit=crop", rating: 5, text: "Using stock audio made our videos sound generic. The custom audio logo VOX designed is now instantly recognized by our audience within the first 2 seconds." },
            { name: "Rohan Kapoor", role: "Game Producer, RetroBox Labs", image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=150&auto=format&fit=crop", rating: 5, text: "Composing synthwave retro tracks for games requires a lot of care. The producer at VOX matched our vision perfectly, delivering looping tracks that transition cleanly." },
            { name: "Sanya Malhotra", role: "Marketing VP, Bloom Media", image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=150&auto=format&fit=crop", rating: 5, text: "Our campaign jingle composed by them was extremely catchy. It led to high recall scores in our brand surveys. The analogue mixing quality sounded punchy on TV." },
            { name: "Charles Vance", role: "Film Director, Vanguard Indie Films", image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=150&auto=format&fit=crop", rating: 5, text: "The orchestration depth they achieved using hybrid midi and live guitars was cinematic. The soundtrack elevated our short film production value immensely." },
            { name: "Emily Watson", role: "Brand Lead, Nova Cosmetics", image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=150&auto=format&fit=crop", rating: 5, text: "We needed ambient, high-end spa music composition. They delivered lush, flowing soundscapes that our customers rave about. Beautiful work." }
        ],
        faqs: [
            { q: "Do I own the full rights to the composed music?", a: "Yes. In our Professional and Enterprise plans, we offer a full exclusive copyright buyout. You own the copyright forever, globally, with zero ongoing royalties." },
            { q: "Can we submit reference tracks for inspiration?", a: "Definitely. We encourage you to send links to existing songs that represent the style, instruments, pace, and production style you are targeting." },
            { q: "What instruments can you record live in the studio?", a: "We routinely record electric/acoustic guitars, bass guitar, acoustic drums, percussion instruments, acoustic piano, and custom vocals." },
            { q: "Do you compose across multiple genres?", a: "Yes, we compose orchestral cinematic scores, synthwave, corporate pop, acoustic folk, ambient soundscapes, hip-hop, and house beats." },
            { q: "What is the difference between mixing and mastering?", a: "Mixing is balancing all individual instruments (adjusting volumes, EQ, panning). Mastering is finalizing the stereo file to polish it and match streaming loudness specifications." },
            { q: "Can you composed music to sync with visual cuts?", a: "Yes, this is 'scoring to picture.' You provide the video file, and we construct the tempo map so drops, beat hits, and builds align with your edit points." },
            { q: "Do you deliver cutdown files for commercials?", a: "Yes. In our Professional plan, we deliver the full track along with standard commercial cutdowns (15s, 30s, 60s) and looped versions." },
            { q: "How many revisions do we get?", a: "Our Professional and Enterprise plans include unlimited revisions. We will compositionally adjust parts until you are 100% satisfied with the track." },
            { q: "Will our custom track trigger YouTube copyright flags?", a: "No. Since the track is composed 100% from scratch for you, it is unique and does not reside in generic stock databases, avoiding Content ID issues." },
            { q: "What audio file formats do you deliver?", a: "We deliver master files in 24-bit WAV format along with high-quality MP3 files, plus separated stem files if requested." }
        ],
        cta: {
            title: "Ready to Create Your Custom Signature Soundtrack?",
            desc: "Connect with our composing directors to share your references. Let's design a sonic signature that defines your brand value.",
            bgImage: "../global-images/music-production.jpg",
            btnPrimaryText: "Book Composer Consultation",
            btnSecondaryText: "Hear Brand Portfolios"
        }
    }
};

document.addEventListener("DOMContentLoaded", () => {
    const urlParams = new URLSearchParams(window.location.search);
    let serviceKey = urlParams.get("service");
    if (!serviceKey || !servicesData[serviceKey]) {
        serviceKey = "voiceover";
    }

    const data = servicesData[serviceKey];
    document.title = data.metaTitle;
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
        metaDescription.setAttribute("content", data.metaDesc);
    } else {
        const meta = document.createElement("meta");
        meta.name = "description";
        meta.content = data.metaDesc;
        document.head.appendChild(meta);
    }
    const heroSection = document.getElementById("hero-section");
    if (heroSection && data.hero) {

        heroSection.style.backgroundImage = `linear-gradient(to bottom, rgba(0, 0, 0, 0.75), rgba(0, 0, 0, 0.75)), url('${data.hero.bgImage}')`;
        heroSection.style.backgroundSize = "cover";
        heroSection.style.backgroundPosition = "center";
        
        document.getElementById("hero-badge-text").innerHTML = data.hero.badge;
        document.getElementById("hero-heading").innerHTML = data.hero.title;
        document.getElementById("hero-description").textContent = data.hero.desc;
        document.getElementById("hero-btn-primary").textContent = data.hero.btnPrimaryText;
        document.getElementById("hero-btn-secondary").textContent = data.hero.btnSecondaryText;
    }
    const aboutTitle = document.getElementById("about-title");
    if (aboutTitle && data.about) {
        aboutTitle.textContent = data.about.title;
        
        const pContainer = document.getElementById("about-paragraphs");
        pContainer.innerHTML = "";
        data.about.paragraphs.forEach(p => {
            const element = document.createElement("p");
            element.className = "text-base leading-relaxed opacity-80 mb-4";
            element.textContent = p;
            pContainer.appendChild(element);
        });

        const aboutImage = document.getElementById("about-image");
        if (aboutImage) {
            aboutImage.src = data.about.image;
            aboutImage.alt = data.title;
        }
        const checklistContainer = document.getElementById("about-checklist");
        checklistContainer.innerHTML = "";
        data.about.checklist.forEach(item => {
            const li = document.createElement("li");
            li.className = "flex items-center gap-3 text-sm font-medium opacity-90";
            li.innerHTML = `<i data-lucide="check-circle" class="w-5 h-5 text-amber-500 flex-shrink-0"></i> <span>${item}</span>`;
            checklistContainer.appendChild(li);
        });
    }

    const featuresGrid = document.getElementById("features-grid");
    if (featuresGrid && data.features) {
        featuresGrid.innerHTML = "";
        data.features.forEach(f => {
            const card = document.createElement("div");
            card.className = "feature-card p-8 rounded-2xl bg-[var(--bg-color)] border border-[var(--border-color)] transition-all duration-300 hover:-translate-y-2 hover:shadow-lg hover:border-amber-500/30 flex flex-col gap-4";
            card.innerHTML = `
                <div class="feature-icon-box w-12 h-12 rounded-xl bg-amber-500/10 flex items-center justify-center text-amber-500">
                    <i data-lucide="${f.icon}" class="w-6 h-6"></i>
                </div>
                <h3 class="text-xl font-bold font-outfit text-[var(--text-color)]">${f.title}</h3>
                <p class="text-sm leading-relaxed opacity-75">${f.desc}</p>
            `;
            featuresGrid.appendChild(card);
        });
    }

    const workflowTimeline = document.getElementById("workflow-timeline");
    if (workflowTimeline && data.workflow) {
        workflowTimeline.innerHTML = "";
        data.workflow.forEach(w => {
            const item = document.createElement("div");
            item.className = "timeline-item flex flex-col md:flex-row gap-6 md:gap-12 relative pb-12 last:pb-0";
            item.innerHTML = `
                <div class="timeline-left md:w-32 flex-shrink-0 flex items-center md:justify-end gap-3">
                    <span class="timeline-step-badge px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-xs font-bold text-amber-500 tracking-wider">STEP 0${w.step}</span>
                </div>
                <div class="timeline-center absolute left-4 md:left-[152px] top-0 bottom-0 w-0.5 bg-[var(--border-color)]">
                    <div class="timeline-node w-5 h-5 rounded-full bg-[var(--bg-color)] border-4 border-amber-500 absolute top-2.5 -left-[9px] transition-all duration-300"></div>
                </div>
                <div class="timeline-right flex-grow pl-8 md:pl-0">
                    <div class="workflow-card p-6 md:p-8 rounded-2xl bg-[var(--bg-color)] border border-[var(--border-color)] shadow-sm hover:border-amber-500/20 transition-all duration-300">
                        <h4 class="text-xl font-bold font-outfit text-[var(--text-color)] mb-2">${w.title}</h4>
                        <p class="text-sm leading-relaxed opacity-75">${w.desc}</p>
                    </div>
                </div>
            `;
            workflowTimeline.appendChild(item);
        });
    }

    const galleryGrid = document.getElementById("gallery-grid");
    if (galleryGrid && data.gallery) {
        galleryGrid.innerHTML = "";
        data.gallery.forEach((g, idx) => {
            const item = document.createElement("div");
            item.className = "gallery-item overflow-hidden rounded-2xl border border-[var(--border-color)] shadow-sm relative group cursor-pointer aspect-[4/3]";
            item.innerHTML = `
                <img src="${g.url}" alt="${g.caption}" class="w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-110 lazy-load" />
                <div class="absolute inset-0 bg-gradient-to-t from-black/85 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                    <div>
                        <span class="text-xs uppercase font-bold text-amber-500 tracking-wider">VOX Studio</span>
                        <h4 class="text-lg font-bold text-white font-outfit mt-1">${g.caption}</h4>
                    </div>
                </div>
            `;
            item.addEventListener("click", () => {
                openLightbox(idx);
            });
            galleryGrid.appendChild(item);
        });
    }

    const pricingGrid = document.getElementById("pricing-grid");
    if (pricingGrid && data.pricing) {
        pricingGrid.innerHTML = "";
        data.pricing.forEach(p => {
            const card = document.createElement("div");
            card.className = `price-card p-8 rounded-3xl flex flex-col border transition-all duration-300 relative ${
                p.popular 
                    ? "bg-[var(--bg-color)] border-amber-500 shadow-[0_15px_40px_rgba(245,158,11,0.15)] -translate-y-2 md:-translate-y-4" 
                    : "bg-[var(--bg-color)] border-[var(--border-color)] hover:border-amber-500/20"
            }`;
            
            let badgeHTML = p.popular 
                ? `<span class="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1.5 rounded-full bg-amber-500 text-xs font-bold text-black uppercase tracking-widest shadow-sm">Popular Choice</span>` 
                : "";

            let featuresListHTML = p.features.map(f => `
                <li class="flex items-center gap-3 text-sm opacity-90">
                    <i data-lucide="check" class="w-4 h-4 text-amber-500 flex-shrink-0"></i>
                    <span>${f}</span>
                </li>
            `).join("");

            card.innerHTML = `
                ${badgeHTML}
                <div class="mb-6">
                    <span class="text-xs uppercase font-bold tracking-widest text-amber-500">${p.name}</span>
                    <h3 class="text-4xl font-extrabold font-outfit text-[var(--text-color)] mt-2">${p.price}</h3>
                    <span class="text-xs opacity-65">${p.period}</span>
                </div>
                <p class="text-sm opacity-75 mb-6 leading-relaxed">${p.desc}</p>
                <div class="h-[1px] bg-[var(--border-color)] mb-6"></div>
                <ul class="flex flex-col gap-3.5 mb-8 flex-grow">
                    ${featuresListHTML}
                </ul>
                <a href="../contact/contact.html" class="w-full text-center py-4 rounded-xl font-bold tracking-wider transition-all duration-300 ${
                    p.popular 
                        ? "bg-amber-500 text-black hover:bg-amber-600 shadow-md hover:-translate-y-0.5" 
                        : "bg-[var(--hover-bg)] border border-[var(--border-color)] text-[var(--text-color)] hover:bg-amber-500 hover:text-black hover:border-amber-500 hover:-translate-y-0.5"
                }">Select Plan</a>
            `;
            pricingGrid.appendChild(card);
        });
    }
    const comparisonTableBody = document.getElementById("comparison-table-body");
    if (comparisonTableBody && data.comparison) {
        comparisonTableBody.innerHTML = "";
        data.comparison.forEach(r => {
            const row = document.createElement("tr");
            row.className = "border-b border-[var(--border-color)] hover:bg-[var(--hover-bg)] transition-colors duration-200";
            row.innerHTML = `
                <td class="px-6 py-5 text-sm font-semibold font-outfit text-[var(--text-color)]">${r.feature}</td>
                <td class="px-6 py-5 text-sm font-semibold text-amber-500 bg-amber-500/5">${r.vox}</td>
                <td class="px-6 py-5 text-sm opacity-75">${r.freelancer}</td>
                <td class="px-6 py-5 text-sm opacity-75">${r.ordinary}</td>
            `;
            comparisonTableBody.appendChild(row);
        });
    }

    const testimonialsSlider = document.getElementById("testimonials-slider");
    if (testimonialsSlider && data.testimonials) {
        testimonialsSlider.innerHTML = "";
        data.testimonials.forEach((t, index) => {
            const slide = document.createElement("div");
            slide.className = `testimonial-slide w-full flex-shrink-0 px-4 md:px-8 py-4 transition-all duration-500 ${
                index === 0 ? "block" : "hidden"
            }`;
            
            let starsHTML = "";
            for (let i = 0; i < 5; i++) {
                starsHTML += `<i data-lucide="star" class="w-4 h-4 ${i < t.rating ? "text-amber-500 fill-amber-500" : "text-amber-500/20"}"></i>`;
            }

            slide.innerHTML = `
                <div class="testimonial-card p-8 md:p-12 rounded-3xl bg-[var(--bg-color)] border border-[var(--border-color)] shadow-sm flex flex-col gap-6 relative max-w-4xl mx-auto">
                    <div class="absolute top-6 right-8 text-amber-500/10 pointer-events-none">
                        <svg class="w-16 h-16 md:w-24 md:h-24 fill-current" viewBox="0 0 24 24"><path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z"/></svg>
                    </div>
                    <div class="flex items-center gap-1">${starsHTML}</div>
                    <p class="text-base md:text-xl leading-relaxed font-medium italic opacity-90 z-10">"${t.text}"</p>
                    <div class="flex items-center gap-4 mt-2">
                        <img src="${t.image}" alt="${t.name}" class="w-12 h-12 rounded-full object-cover border border-amber-500/20" />
                        <div>
                            <h4 class="font-bold text-[var(--text-color)] font-outfit text-sm md:text-base">${t.name}</h4>
                            <p class="text-xs opacity-65">${t.role}</p>
                        </div>
                    </div>
                </div>
            `;
            testimonialsSlider.appendChild(slide);
        });
        setupTestimonialSlider();
    }

    const faqAccordion = document.getElementById("faq-accordion");
    if (faqAccordion && data.faqs) {
        faqAccordion.innerHTML = "";
        data.faqs.forEach(f => {
            const item = document.createElement("div");
            item.className = "faq-item rounded-2xl bg-[var(--bg-color)] border border-[var(--border-color)] overflow-hidden transition-all duration-300 hover:border-amber-500/20 cursor-pointer";
            item.innerHTML = `
                <button class="faq-trigger w-full px-6 py-5 flex items-center justify-between text-left gap-4">
                    <span class="text-base font-bold font-outfit text-[var(--text-color)] transition-colors duration-200">${f.q}</span>
                    <span class="faq-icon-box w-8 h-8 rounded-lg bg-[var(--hover-bg)] flex items-center justify-center text-amber-500 transition-all duration-300">
                        <i data-lucide="plus" class="w-4 h-4 trigger-icon"></i>
                    </span>
                </button>
                <div class="faq-content max-h-0 overflow-hidden transition-all duration-300 ease-out px-6">
                    <p class="pb-5 text-sm leading-relaxed opacity-75">${f.a}</p>
                </div>
            `;
            faqAccordion.appendChild(item);
        });
        setupFaqAccordion();
    }

    const ctaSection = document.getElementById("cta-section");
    if (ctaSection && data.cta) {
        ctaSection.style.backgroundImage = `linear-gradient(to bottom, rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8)), url('${data.cta.bgImage}')`;
        ctaSection.style.backgroundSize = "cover";
        ctaSection.style.backgroundPosition = "center";

        document.getElementById("cta-title").innerHTML = data.cta.title;
        document.getElementById("cta-description").textContent = data.cta.desc;
        document.getElementById("cta-btn-primary").textContent = data.cta.btnPrimaryText;
        document.getElementById("cta-btn-secondary").textContent = data.cta.btnSecondaryText;
    }

    lucide.createIcons();

    loadHeaderAndFooter();

    initializeScrollAnimations();
});

function loadHeaderAndFooter() {
    fetch("../components/navbar.html")
        .then(response => response.text())
        .then(data => {
            document.getElementById("navbar").innerHTML = data;

            document.querySelectorAll('.nav-link').forEach(link => {
                const href = link.getAttribute('href');
                if (href && href.includes('services.html')) {
                    link.classList.add('active');
                }
            });

            initializeNavbar();
        });

    fetch("../components/footer.html")
        .then(response => response.text())
        .then(data => {
            document.getElementById("footer").innerHTML = data;
            lucide.createIcons();
        });
}

let currentSlide = 0;
function setupTestimonialSlider() {
    const slides = document.querySelectorAll(".testimonial-slide");
    const prevBtn = document.getElementById("testimonial-prev");
    const nextBtn = document.getElementById("testimonial-next");
    const dotContainer = document.getElementById("testimonial-dots");

    if (!slides.length) return;

    if (dotContainer) {
        dotContainer.innerHTML = "";
        slides.forEach((_, idx) => {
            const dot = document.createElement("button");
            dot.className = `w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                idx === 0 ? "bg-amber-500 scale-125" : "bg-[var(--border-color)] hover:bg-amber-500/40"
            }`;
            dot.setAttribute("aria-label", `Go to slide ${idx + 1}`);
            dot.addEventListener("click", () => {
                goToSlide(idx);
            });
            dotContainer.appendChild(dot);
        });
    }

    function goToSlide(n) {
        slides[currentSlide].classList.add("hidden");
        slides[currentSlide].classList.remove("block");
        
        currentSlide = (n + slides.length) % slides.length;
        
        slides[currentSlide].classList.add("block");
        slides[currentSlide].classList.remove("hidden");

        if (dotContainer) {
            const dots = dotContainer.querySelectorAll("button");
            dots.forEach((dot, idx) => {
                if (idx === currentSlide) {
                    dot.className = "w-2.5 h-2.5 rounded-full transition-all duration-300 bg-amber-500 scale-125";
                } else {
                    dot.className = "w-2.5 h-2.5 rounded-full transition-all duration-300 bg-[var(--border-color)] hover:bg-amber-500/40";
                }
            });
        }
    }

    if (prevBtn) {
        prevBtn.addEventListener("click", () => {
            goToSlide(currentSlide - 1);
        });
    }
    if (nextBtn) {
        nextBtn.addEventListener("click", () => {
            goToSlide(currentSlide + 1);
        });
    }

    setInterval(() => {
        goToSlide(currentSlide + 1);
    }, 8000);
}
function setupFaqAccordion() {
    const faqItems = document.querySelectorAll(".faq-item");
    faqItems.forEach(item => {
        item.addEventListener("click", () => {
            const trigger = item.querySelector(".faq-trigger");
            const content = item.querySelector(".faq-content");
            const iconBox = item.querySelector(".faq-icon-box");
            const isCurrentlyOpen = item.classList.contains("active");
            document.querySelectorAll(".faq-item.active").forEach(activeItem => {
                if (activeItem !== item) {
                    activeItem.classList.remove("active");
                    activeItem.querySelector(".faq-content").style.maxHeight = "0";
                    activeItem.querySelector(".faq-icon-box").style.transform = "rotate(0deg)";
                    const activeIcon = activeItem.querySelector(".trigger-icon");
                    activeIcon.setAttribute("data-lucide", "plus");
                    lucide.createIcons();
                }
            });

            if (isCurrentlyOpen) {
                item.classList.remove("active");
                content.style.maxHeight = "0";
                iconBox.style.transform = "rotate(0deg)";
                const icon = item.querySelector(".trigger-icon");
                icon.setAttribute("data-lucide", "plus");
                lucide.createIcons();
            } else {
                item.classList.add("active");
                content.style.maxHeight = content.scrollHeight + "px";
                iconBox.style.transform = "rotate(45deg)";
                const icon = item.querySelector(".trigger-icon");
                icon.setAttribute("data-lucide", "plus"); 
                lucide.createIcons();
            }
        });
    });
}

let activeLightboxIndex = 0;
function openLightbox(index) {
    const urlParams = new URLSearchParams(window.location.search);
    let serviceKey = urlParams.get("service") || "voiceover";
    if (!servicesData[serviceKey]) serviceKey = "voiceover";
    const gallery = servicesData[serviceKey].gallery;

    activeLightboxIndex = index;
    const lightboxModal = document.getElementById("lightbox-modal");
    const lightboxImg = document.getElementById("lightbox-image");
    const lightboxCaption = document.getElementById("lightbox-caption");

    if (lightboxModal && lightboxImg && lightboxCaption) {
        lightboxImg.src = gallery[index].url;
        lightboxCaption.textContent = gallery[index].caption;
        lightboxModal.classList.remove("hidden");
        lightboxModal.classList.add("flex");
        document.body.style.overflow = "hidden";
    }
}

function closeLightbox() {
    const lightboxModal = document.getElementById("lightbox-modal");
    if (lightboxModal) {
        lightboxModal.classList.remove("flex");
        lightboxModal.classList.add("hidden");
        document.body.style.overflow = ""; // 
    }
}

function navigateLightbox(direction) {
    const urlParams = new URLSearchParams(window.location.search);
    let serviceKey = urlParams.get("service") || "voiceover";
    if (!servicesData[serviceKey]) serviceKey = "voiceover";
    const gallery = servicesData[serviceKey].gallery;

    activeLightboxIndex = (activeLightboxIndex + direction + gallery.length) % gallery.length;
    
    const lightboxImg = document.getElementById("lightbox-image");
    const lightboxCaption = document.getElementById("lightbox-caption");
    if (lightboxImg && lightboxCaption) {
        lightboxImg.src = gallery[activeLightboxIndex].url;
        lightboxCaption.textContent = gallery[activeLightboxIndex].caption;
    }
}

document.addEventListener("DOMContentLoaded", () => {
    const closeBtn = document.getElementById("lightbox-close");
    const prevBtn = document.getElementById("lightbox-prev");
    const nextBtn = document.getElementById("lightbox-next");
    const bgClick = document.getElementById("lightbox-modal");

    if (closeBtn) {
        closeBtn.addEventListener("click", (e) => {
            e.stopPropagation();
            closeLightbox();
        });
    }
    if (prevBtn) {
        prevBtn.addEventListener("click", (e) => {
            e.stopPropagation();
            navigateLightbox(-1);
        });
    }
    if (nextBtn) {
        nextBtn.addEventListener("click", (e) => {
            e.stopPropagation();
            navigateLightbox(1);
        });
    }
    if (bgClick) {
        bgClick.addEventListener("click", (e) => {
            if (e.target === bgClick) {
                closeLightbox();
            }
        });
    }

    document.addEventListener("keydown", (e) => {
        const lightboxModal = document.getElementById("lightbox-modal");
        if (lightboxModal && !lightboxModal.classList.contains("hidden")) {
            if (e.key === "Escape") {
                closeLightbox();
            } else if (e.key === "ArrowLeft") {
                navigateLightbox(-1);
            } else if (e.key === "ArrowRight") {
                navigateLightbox(1);
            }
        }
    });
});
function initializeScrollAnimations() {
    const revealElements = document.querySelectorAll(
        ".feature-card, .timeline-item, .gallery-item, .price-card, .faq-item, .about-animate"
    );

    const observerOptions = {
        root: null,
        threshold: 0.1,
        rootMargin: "0px 0px -50px 0px"
    };

    const revealObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("reveal-visible");
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    revealElements.forEach(el => {
        el.classList.add("reveal-hidden");
        revealObserver.observe(el);
    });
}
