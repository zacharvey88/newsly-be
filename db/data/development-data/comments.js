module.exports = [
  // Article 1: Running a Node App (chookity, programming)
  {
    "body": "Awesome Systemd guide, Mooncake! Setting Restart=always worked perfectly for my app. Any tips for optimizing service startup times?",
    "votes": 3,
    "author": "youshallnotpass",
    "article_id": 1,
    "created_at": 1604728981000
  },
  {
    "body": "Glad it helped, Gandalf! For faster startups, try preloading dependencies or using a lighter Node version. Also, check if your app has any blocking I/O on init.",
    "votes": 2,
    "author": "chookity",
    "article_id": 1,
    "created_at": 1604729000000
  },
  {
    "body": "I had issues with permissions when setting up my service. Make sure to run it as a non-root user, as Mooncake suggested. Saved me a lot of headaches!",
    "votes": 1,
    "author": "bladerunner",
    "article_id": 1,
    "created_at": 1604729100000
  },

  // Article 2: Building Scalable APIs with Express (bladerunner, programming)
  {
    "body": "Great article, Deckard! I especially liked the part about securing the API with JWT. Do you have any recommendations for handling token refresh in a scalable way?",
    "votes": 4,
    "author": "whitewolf",
    "article_id": 2,
    "created_at": 1735689601000
  },
  {
    "body": "Thanks, Geralt! For token refresh, I suggest implementing a refresh token mechanism. Store refresh tokens securely and rotate them periodically. Also, consider using short-lived access tokens to minimize risks.",
    "votes": 3,
    "author": "bladerunner",
    "article_id": 2,
    "created_at": 1735689700000
  },
  {
    "body": "I've been using Express for years, and your tips on structuring the project are spot on. Separating routes, controllers, and models really helps with maintainability.",
    "votes": 2,
    "author": "youshallnotpass",
    "article_id": 2,
    "created_at": 1735689800000
  },

  // Article 3: Debugging Like a Wizard (youshallnotpass, programming)
  {
    "body": "Gandalf, your debugging guide is a lifesaver! I've been struggling with a tricky bug in my Python script. Any advice on using pdb effectively?",
    "votes": 5,
    "author": "avadakedavra",
    "article_id": 3,
    "created_at": 1735776001000
  },
  {
    "body": "Thanks, Voldemort! For pdb, start by setting breakpoints with 'break linenumber'. Use 'step' to go line by line and 'print variable' to check values. Also, 'where' shows the call stack. Happy debugging!",
    "votes": 4,
    "author": "youshallnotpass",
    "article_id": 3,
    "created_at": 1735776100000
  },
  {
    "body": "I once spent hours debugging only to find out it was a typo in a variable name. Debugging truly is a dark art sometimes!",
    "votes": 3,
    "author": "chookity",
    "article_id": 3,
    "created_at": 1735776200000
  },

  // Article 4: CI/CD with GitHub Actions (whitewolf, programming)
  {
    "body": "Geralt, your CI/CD guide is excellent. I've set up GitHub Actions for my project, but the build times are slow. Any optimization tips?",
    "votes": 5,
    "author": "bladerunner",
    "article_id": 4,
    "created_at": 1735862401000
  },
  {
    "body": "Thanks, Deckard! Try caching dependencies with actions/cache to speed up builds. Also, split tests into parallel jobs if possible. It can cut times by 50%.",
    "votes": 4,
    "author": "whitewolf",
    "article_id": 4,
    "created_at": 1735862500000
  },

  // Article 5: Microservices Architecture 101 (dragonrider, programming)
  {
    "body": "Daenerys, your microservices guide is very informative. I'm curious about the challenges of managing multiple services in production. Any advice?",
    "votes": 6,
    "author": "youshallnotpass",
    "article_id": 5,
    "created_at": 1735948801000
  },
  {
    "body": "Gandalf, managing microservices requires robust monitoring and logging. Use tools like Prometheus and ELK stack. Also, implement circuit breakers to handle failures gracefully.",
    "votes": 5,
    "author": "dragonrider",
    "article_id": 5,
    "created_at": 1735948900000
  },

  // Article 6: Vegan Feast for Dragons (dragonrider, vegan-cooking)
  {
    "body": "Daenerys, your chickpea curry recipe is amazing! I made it last night, and it was a hit. Any suggestions for making it less spicy for kids?",
    "votes": 6,
    "author": "whitewolf",
    "article_id": 6,
    "created_at": 1736035201000
  },
  {
    "body": "Thanks, Geralt! For a milder version, reduce the chili flakes by half and add a tablespoon of coconut yogurt to balance the heat. Kids might enjoy it with some naan bread too!",
    "votes": 5,
    "author": "dragonrider",
    "article_id": 6,
    "created_at": 1736035300000
  },
  {
    "body": "I love the idea of a vegan feast. The roasted root vegetables sound perfect for winter. Do you have any tips for getting them extra crispy?",
    "votes": 4,
    "author": "bladerunner",
    "article_id": 6,
    "created_at": 1736035400000
  },

  // Article 7: Plant-Based Potions (avadakedavra, vegan-cooking)
  {
    "body": "Voldemort, your vegan potions are intriguing. I tried the green smoothie, and it was delicious. Do you have any recipes for vegan desserts?",
    "votes": 4,
    "author": "chookity",
    "article_id": 7,
    "created_at": 1736121601000
  },
  {
    "body": "Mooncake, try my vegan chocolate mousse: blend avocado, cocoa powder, and maple syrup. Chill for an hour. It's sinfully good!",
    "votes": 3,
    "author": "avadakedavra",
    "article_id": 7,
    "created_at": 1736121700000
  },

  // Article 8: Hobbit-Approved Vegan Pies (youshallnotpass, vegan-cooking)
  {
    "body": "Gandalf, your vegan pie recipes sound delightful. I'm hosting a dinner party next week and would love to serve the mushroom pie. Any serving suggestions?",
    "votes": 5,
    "author": "dragonrider",
    "article_id": 8,
    "created_at": 1736208001000
  },
  {
    "body": "Daenerys, serve the mushroom pie with a side of roasted garlic mashed potatoes and a fresh green salad. It'll be a feast fit for the Shire!",
    "votes": 4,
    "author": "youshallnotpass",
    "article_id": 8,
    "created_at": 1736208100000
  },

  // Article 9: Witcher’s Vegan Trail Mix (whitewolf, vegan-cooking)
  {
    "body": "Geralt, your trail mix recipe is perfect for my hiking trips. I added some dried mango for extra sweetness. Thanks for sharing!",
    "votes": 3,
    "author": "bladerunner",
    "article_id": 9,
    "created_at": 1736294401000
  },

  // Article 10: Replicant’s Vegan Sushi (bladerunner, vegan-cooking)
  {
    "body": "Deckard, your vegan sushi guide is fantastic. I never thought to use carrot for a spicy roll. It was a hit at my party!",
    "votes": 4,
    "author": "avadakedavra",
    "article_id": 10,
    "created_at": 1736380801000
  },
  {
    "body": "Glad you liked it, Voldemort! The carrot adds a nice crunch and color. Next time, try adding some pickled radish for extra zing.",
    "votes": 3,
    "author": "bladerunner",
    "article_id": 10,
    "created_at": 1736380900000
  },

  // Article 11: Meditating Like a Wizard (youshallnotpass, health-wellness)
  {
    "body": "Gandalf, your meditation guide is so helpful. I've been trying to meditate daily but struggle with consistency. Any tips to make it a habit?",
    "votes": 7,
    "author": "chookity",
    "article_id": 11,
    "created_at": 1736467201000
  },
  {
    "body": "Mooncake, consistency is key. Start with just 5 minutes a day at the same time, like after breakfast. Use an app like Headspace to track your streak. Over time, it becomes as natural as breathing.",
    "votes": 6,
    "author": "youshallnotpass",
    "article_id": 11,
    "created_at": 1736467300000
  },
  {
    "body": "I've found that meditating in the morning sets a positive tone for the day. Thanks for the advice, Gandalf!",
    "votes": 5,
    "author": "dragonrider",
    "article_id": 11,
    "created_at": 1736467400000
  },

  // Article 12: Dragon Queen’s Yoga Flow (dragonrider, health-wellness)
  {
    "body": "Daenerys, your yoga flow is invigorating! I tried the Warrior series, and it really helped with my flexibility. Any tips for beginners struggling with balance poses?",
    "votes": 6,
    "author": "whitewolf",
    "article_id": 12,
    "created_at": 1736553601000
  },
  {
    "body": "Geralt, for balance poses like Tree Pose, focus on a fixed point in front of you and engage your core. Start by holding the pose for a few seconds and gradually increase the time. Practice near a wall if needed.",
    "votes": 5,
    "author": "dragonrider",
    "article_id": 12,
    "created_at": 1736553700000
  },

  // Article 13: Witcher’s Strength Training (whitewolf, health-wellness)
  {
    "body": "Geralt, your strength training routine is intense! I started with the squats and push-ups, and I can already feel the difference. Any advice on preventing muscle soreness?",
    "votes": 7,
    "author": "bladerunner",
    "article_id": 13,
    "created_at": 1736640001000
  },
  {
    "body": "Deckard, to reduce soreness, make sure to warm up properly and stretch after your workout. Also, stay hydrated and consider a protein-rich snack post-exercise to aid recovery.",
    "votes": 6,
    "author": "whitewolf",
    "article_id": 13,
    "created_at": 1736640100000
  },

  // Article 14: Replicant’s Stress Relief (bladerunner, health-wellness)
  {
    "body": "Deckard, your stress relief techniques are very practical. I've been using the deep breathing method, and it really helps. Do you have any recommendations for dealing with work-related stress?",
    "votes": 4,
    "author": "youshallnotpass",
    "article_id": 14,
    "created_at": 1736726401000
  },
  {
    "body": "Gandalf, for work stress, try setting clear boundaries between work and personal time. Also, take short breaks every hour to stretch or walk. Journaling can help process work challenges too.",
    "votes": 3,
    "author": "bladerunner",
    "article_id": 14,
    "created_at": 1736726500000
  },

  // Article 15: Dark Lord’s Sleep Secrets (avadakedavra, health-wellness)
  {
    "body": "Voldemort, your sleep tips are surprisingly effective. I've started drinking chamomile tea before bed, and it's made a difference. Any other herbal teas you recommend for sleep?",
    "votes": 3,
    "author": "chookity",
    "article_id": 15,
    "created_at": 1736812801000
  },
  {
    "body": "Mooncake, lavender tea is another great option for promoting relaxation. You can also try valerian root tea, but it's quite strong, so use it sparingly.",
    "votes": 2,
    "author": "avadakedavra",
    "article_id": 15,
    "created_at": 1736812900000
  },

  // Article 16: AI in the Future City (bladerunner, tech)
  {
    "body": "Deckard, your article on AI in cities is fascinating, but I'm concerned about privacy issues with surveillance. How can we ensure AI doesn't infringe on our rights?",
    "votes": 8,
    "author": "avadakedavra",
    "article_id": 16,
    "created_at": 1736899201000
  },
  {
    "body": "Valid concern, Voldemort. AI surveillance must be regulated with strict laws, like data anonymization and consent requirements. Citizens should have access to oversight committees. It's a delicate balance, but necessary.",
    "votes": 7,
    "author": "bladerunner",
    "article_id": 16,
    "created_at": 1736899300000
  },
  {
    "body": "I think AI can actually enhance privacy if used correctly, like detecting crimes without storing personal data. It's all about implementation.",
    "votes": 6,
    "author": "whitewolf",
    "article_id": 16,
    "created_at": 1736899400000
  },

  // Article 17: Wizard’s Guide to IoT (youshallnotpass, tech)
  {
    "body": "Gandalf, your IoT guide is very thorough. I'm setting up a smart home system. Any recommendations for securing IoT devices from hacks?",
    "votes": 5,
    "author": "dragonrider",
    "article_id": 17,
    "created_at": 1736985601000
  },
  {
    "body": "Daenerys, security is crucial. Use strong, unique passwords for each device, enable two-factor authentication, and keep firmware updated. Also, isolate IoT devices on a separate network to limit risks.",
    "votes": 4,
    "author": "youshallnotpass",
    "article_id": 17,
    "created_at": 1736985700000
  },

  // Article 18: Chookity’s VR Adventures (chookity, tech)
  {
    "body": "Mooncake, your VR guide is so exciting! I'm thinking of getting a VR headset. Which one would you recommend for a beginner on a budget?",
    "votes": 6,
    "author": "bladerunner",
    "article_id": 18,
    "created_at": 1737072001000
  },
  {
    "body": "Deckard, for beginners, the Oculus Quest 2 is a great choice. It's affordable, wireless, and has a wide range of games and apps. Plus, it's easy to set up!",
    "votes": 5,
    "author": "chookity",
    "article_id": 18,
    "created_at": 1737072100000
  },

  // Article 19: Dragon-Powered Drones (dragonrider, tech)
  {
    "body": "Daenerys, your drone guide is impressive. I'm interested in using drones for photography. Any tips on capturing the best aerial shots?",
    "votes": 7,
    "author": "whitewolf",
    "article_id": 19,
    "created_at": 1737158401000
  },
  {
    "body": "Geralt, for great aerial photos, fly during golden hour for soft lighting. Use the rule of thirds to compose your shots, and experiment with different altitudes for unique perspectives.",
    "votes": 6,
    "author": "dragonrider",
    "article_id": 19,
    "created_at": 1737158500000
  },

  // Article 20: Witcher’s Cybersecurity Tips (whitewolf, tech)
  {
    "body": "Geralt, your cybersecurity tips are essential. I've started using a VPN, but I'm not sure if it's enough. What else can I do to protect my online privacy?",
    "votes": 8,
    "author": "avadakedavra",
    "article_id": 20,
    "created_at": 1737244801000
  },
  {
    "body": "Voldemort, a VPN is a good start. Additionally, use strong, unique passwords for each account, enable two-factor authentication, and be cautious with public Wi-Fi. Also, consider using privacy-focused browsers like Brave.",
    "votes": 7,
    "author": "whitewolf",
    "article_id": 20,
    "created_at": 1737244900000
  },

  // Article 21: Quantum Magic Explained (youshallnotpass, science)
  {
    "body": "Gandalf, your explanation of quantum mechanics is mind-blowing. I still struggle with the concept of superposition. Can you recommend any resources for further reading?",
    "votes": 9,
    "author": "chookity",
    "article_id": 21,
    "created_at": 1737331201000
  },
  {
    "body": "Mooncake, for superposition, check out 'Quantum Mechanics: The Theoretical Minimum' by Susskind. Also, PBS Space Time on YouTube has great videos on quantum topics. Keep exploring!",
    "votes": 8,
    "author": "youshallnotpass",
    "article_id": 21,
    "created_at": 1737331300000
  },

  // Article 22: Dragon Fire vs. Physics (dragonrider, science)
  {
    "body": "Daenerys, your analysis of dragon fire is fascinating. I wonder, could dragons theoretically exist if we consider genetic engineering or other scientific advancements?",
    "votes": 6,
    "author": "bladerunner",
    "article_id": 22,
    "created_at": 1737417601000
  },
  {
    "body": "Deckard, while genetic engineering could create fire-breathing creatures, the physics of flight and fire production remain challenging. It's a fun thought experiment, though!",
    "votes": 5,
    "author": "dragonrider",
    "article_id": 22,
    "created_at": 1737417700000
  },

  // Article 23: Chookity’s Exoplanet Hunt (chookity, science)
  {
    "body": "Mooncake, your exoplanet guide is out of this world! I'm curious about the transit method. How do scientists distinguish between a planet and other celestial objects?",
    "votes": 5,
    "author": "whitewolf",
    "article_id": 23,
    "created_at": 1737504001000
  },
  {
    "body": "Geralt, the transit method looks for periodic dimming of a star's light. By analyzing the light curve, scientists can determine the size and orbit of the planet. It's like watching a tiny eclipse!",
    "votes": 4,
    "author": "chookity",
    "article_id": 23,
    "created_at": 1737504100000
  },

  // Article 24: Replicant’s Gene Editing (bladerunner, science)
  {
    "body": "Deckard, your CRISPR guide is very informative. I'm concerned about the ethical implications of gene editing. How can we ensure it's used responsibly?",
    "votes": 7,
    "author": "avadakedavra",
    "article_id": 24,
    "created_at": 1737590401000
  },
  {
    "body": "Voldemort, ethical oversight is crucial. International guidelines and regulatory bodies must monitor gene editing research and applications. Public discourse and education are also key to responsible use.",
    "votes": 6,
    "author": "bladerunner",
    "article_id": 24,
    "created_at": 1737590500000
  },

  // Article 25: Witcher’s Brain Science (whitewolf, science)
  {
    "body": "Geralt, your neuroscience insights are enlightening. I've been trying to improve my memory. Any brain exercises or techniques you recommend?",
    "votes": 4,
    "author": "youshallnotpass",
    "article_id": 25,
    "created_at": 1737676801000
  },
  {
    "body": "Gandalf, try mnemonic devices like the method of loci for memory improvement. Also, regular physical exercise and learning new skills can boost neuroplasticity. Keep your mind sharp!",
    "votes": 3,
    "author": "whitewolf",
    "article_id": 25,
    "created_at": 1737676900000
  },

  // Article 26: Wizard’s Top Fantasy Films (youshallnotpass, entertainment)
  {
    "body": "Gandalf, your list is spot on! *The Princess Bride* is a classic. Have you seen *Stardust*? It's another gem with a similar vibe.",
    "votes": 9,
    "author": "dragonrider",
    "article_id": 26,
    "created_at": 1737763201000
  },
  {
    "body": "Thanks, Daenerys! *Stardust* is indeed wonderful. I'll add it to my watchlist. Any other recommendations for fantasy lovers?",
    "votes": 8,
    "author": "youshallnotpass",
    "article_id": 26,
    "created_at": 1737763300000
  },
  {
    "body": "Don't forget *Willow*! It's an underrated fantasy adventure with great effects for its time.",
    "votes": 7,
    "author": "chookity",
    "article_id": 26,
    "created_at": 1737763400000
  },

  // Article 27: Dark Lord’s TV Villains (avadakedavra, entertainment)
  {
    "body": "Voldemort, your analysis of TV villains is chillingly accurate. Walter White's transformation is indeed captivating. Any other villains you find particularly compelling?",
    "votes": 6,
    "author": "bladerunner",
    "article_id": 27,
    "created_at": 1737849601000
  },
  {
    "body": "Deckard, I find Hannibal Lecter from *Hannibal* to be exceptionally intriguing. His intellect and sophistication make him a formidable antagonist.",
    "votes": 5,
    "author": "avadakedavra",
    "article_id": 27,
    "created_at": 1737849700000
  },

  // Article 28: Dragon Queen’s Epic Series (dragonrider, entertainment)
  {
    "body": "Daenerys, your series recommendations are epic! *The Witcher* is one of my favorites. Have you watched *The Mandalorian*? It's another great sci-fi fantasy blend.",
    "votes": 7,
    "author": "whitewolf",
    "article_id": 28,
    "created_at": 1737936001000
  },
  {
    "body": "Geralt, I have! *The Mandalorian* is fantastic, especially for its world-building and character development. It's definitely worth a watch.",
    "votes": 6,
    "author": "dragonrider",
    "article_id": 28,
    "created_at": 1737936100000
  },

  // Article 29: Chookity’s Sci-Fi Reviews (chookity, entertainment)
  {
    "body": "Mooncake, your sci-fi reviews are spot on. *Final Space* is such a unique show. Have you seen *Rick and Morty*? It's another animated sci-fi with a lot of heart and humor.",
    "votes": 5,
    "author": "youshallnotpass",
    "article_id": 29,
    "created_at": 1738022401000
  },
  {
    "body": "Gandalf, I love *Rick and Morty*! The interdimensional adventures and witty dialogue are brilliant. It's definitely a must-watch for sci-fi fans.",
    "votes": 4,
    "author": "chookity",
    "article_id": 29,
    "created_at": 1738022500000
  },

  // Article 30: Witcher’s Movie Soundtracks (whitewolf, entertainment)
  {
    "body": "Geralt, your soundtrack choices are impeccable. *The Witcher* score is hauntingly beautiful. Have you listened to the *Interstellar* soundtrack? It's another masterpiece by Hans Zimmer.",
    "votes": 4,
    "author": "bladerunner",
    "article_id": 30,
    "created_at": 1738108801000
  },
  {
    "body": "Deckard, I have! *Interstellar* has an incredible score that perfectly captures the vastness of space. It's one of my favorites for sure.",
    "votes": 3,
    "author": "whitewolf",
    "article_id": 30,
    "created_at": 1738108900000
  },

  // Article 31: Wizard’s Folk Music Picks (youshallnotpass, music)
  {
    "body": "Gandalf, your folk music recommendations are enchanting. Loreena McKennitt's music is indeed magical. Any other artists you suggest for a similar vibe?",
    "votes": 7,
    "author": "dragonrider",
    "article_id": 31,
    "created_at": 1738195201000
  },
  {
    "body": "Daenerys, check out Enya for ethereal, Celtic-inspired music. Her album *Watermark* is particularly soothing and evocative.",
    "votes": 6,
    "author": "youshallnotpass",
    "article_id": 31,
    "created_at": 1738195300000
  },

  // Article 32: Dragon Queen’s Epic Scores (dragonrider, music)
  {
    "body": "Daenerys, your epic score selections are inspiring. The *Game of Thrones* soundtrack is iconic. Have you heard the *Lord of the Rings* scores? They're equally magnificent.",
    "votes": 6,
    "author": "whitewolf",
    "article_id": 32,
    "created_at": 1738281601000
  },
  {
    "body": "Geralt, absolutely! Howard Shore's work on *Lord of the Rings* is unparalleled. The Shire theme alone is worth listening to on repeat.",
    "votes": 5,
    "author": "dragonrider",
    "article_id": 32,
    "created_at": 1738281700000
  },

  // Article 33: Dark Lord’s Darkwave Vibes (avadakedavra, music)
  {
    "body": "Voldemort, your darkwave picks are perfectly moody. Dead Can Dance is a favorite of mine. Any recommendations for live performances or concerts in this genre?",
    "votes": 5,
    "author": "chookity",
    "article_id": 33,
    "created_at": 1738368001000
  },
  {
    "body": "Mooncake, look for festivals like Wave-Gotik-Treffen in Germany. They feature many darkwave and gothic bands. Also, check out Clan of Xymox's live shows; they're mesmerizing.",
    "votes": 4,
    "author": "avadakedavra",
    "article_id": 33,
    "created_at": 1738368100000
  },

  // Article 34: Chookity’s Space Pop (chookity, music)
  {
    "body": "Mooncake, your space pop recommendations are out of this world! CHVRCHES is amazing. Have you listened to M83? Their album *Hurry Up, We're Dreaming* is a space pop masterpiece.",
    "votes": 4,
    "author": "bladerunner",
    "article_id": 34,
    "created_at": 1738454401000
  },
  {
    "body": "Deckard, I love M83! *Midnight City* is such an anthem. Their music definitely captures that cosmic vibe. Thanks for the reminder!",
    "votes": 3,
    "author": "chookity",
    "article_id": 34,
    "created_at": 1738454500000
  },

  // Article 35: Witcher’s Bard Ballads (whitewolf, music)
  {
    "body": "Geralt, your bard ballad selections are nostalgic. *Toss a Coin to Your Witcher* is stuck in my head! Any other bard songs from the series you recommend?",
    "votes": 7,
    "author": "youshallnotpass",
    "article_id": 35,
    "created_at": 1738540801000
  },
  {
    "body": "Gandalf, definitely check out *Her Sweet Kiss* and *The Fishmonger's Daughter*. Both have that medieval charm and are quite catchy!",
    "votes": 6,
    "author": "whitewolf",
    "article_id": 35,
    "created_at": 1738540900000
  },

  // Article 36: Wizard’s Guide to Sustainability (youshallnotpass, environment)
  {
    "body": "Gandalf, your sustainability tips are practical and inspiring. I've started composting, but I'm not sure what to do with the compost. Any suggestions?",
    "votes": 8,
    "author": "dragonrider",
    "article_id": 36,
    "created_at": 1738627201000
  },
  {
    "body": "Daenerys, use your compost to enrich garden soil or potted plants. It's great for vegetable gardens or flower beds. You can also donate it to community gardens if you have extra.",
    "votes": 7,
    "author": "youshallnotpass",
    "article_id": 36,
    "created_at": 1738627300000
  },

  // Article 37: Dragon Queen’s Climate Fight (dragonrider, environment)
  {
    "body": "Daenerys, your climate fight guide is empowering. I'm trying to reduce my carbon footprint. Any tips for making my home more energy-efficient?",
    "votes": 6,
    "author": "whitewolf",
    "article_id": 37,
    "created_at": 1738713601000
  },
  {
    "body": "Geralt, start by sealing drafts around windows and doors, upgrade to LED bulbs, and consider installing a programmable thermostat. Also, unplug devices when not in use to save energy.",
    "votes": 5,
    "author": "dragonrider",
    "article_id": 37,
    "created_at": 1738713700000
  },

  // Article 38: Witcher’s Wildlife Protection (whitewolf, environment)
  {
    "body": "Geralt, your wildlife protection guide is eye-opening. I'm passionate about conservation. How can I get involved in local wildlife protection efforts?",
    "votes": 5,
    "author": "bladerunner",
    "article_id": 38,
    "created_at": 1738800001000
  },
  {
    "body": "Deckard, look for local conservation groups or wildlife sanctuaries. Volunteer for habitat restoration projects or participate in citizen science programs. Every effort counts!",
    "votes": 4,
    "author": "whitewolf",
    "article_id": 38,
    "created_at": 1738800100000
  },

  // Article 39: Chookity’s Eco-Tech (chookity, environment)
  {
    "body": "Mooncake, your eco-tech guide is fantastic. I'm considering switching to an electric vehicle. Any advice on choosing the right one for a family?",
    "votes": 4,
    "author": "avadakedavra",
    "article_id": 39,
    "created_at": 1738886401000
  },
  {
    "body": "Voldemort, look for EVs with good range, like the Tesla Model Y or Ford Mustang Mach-E. Check for family-friendly features like spacious interiors and safety ratings. Test drive a few to see what fits best!",
    "votes": 3,
    "author": "chookity",
    "article_id": 39,
    "created_at": 1738886500000
  },

  // Article 40: Replicant’s Urban Gardening (bladerunner, environment)
  {
    "body": "Deckard, your urban gardening tips are great. I live in an apartment with limited space. Any suggestions for growing herbs indoors?",
    "votes": 7,
    "author": "youshallnotpass",
    "article_id": 40,
    "created_at": 1738972801000
  },
  {
    "body": "Gandalf, use window sills or small shelves for potted herbs like basil, mint, and parsley. Ensure they get at least 6 hours of sunlight or use grow lights. Water regularly but avoid overwatering.",
    "votes": 6,
    "author": "bladerunner",
    "article_id": 40,
    "created_at": 1738972900000
  },

  // Article 41: Wizard’s Middle-earth Tour (youshallnotpass, travel)
  {
    "body": "Gandalf, your Middle-earth tour sounds magical. I'm planning a trip to New Zealand. Any must-see spots besides Hobbiton?",
    "votes": 9,
    "author": "dragonrider",
    "article_id": 41,
    "created_at": 1739059201000
  },
  {
    "body": "Daenerys, definitely visit Tongariro National Park for its volcanic landscapes, and Milford Sound for stunning fjords. Also, the glowworm caves in Waitomo are enchanting!",
    "votes": 8,
    "author": "youshallnotpass",
    "article_id": 41,
    "created_at": 1739059300000
  },

  // Article 42: Dragon Queen’s Desert Trek (dragonrider, travel)
  {
    "body": "Daenerys, your desert trek guide is adventurous. I'm considering a trip to Petra. Any tips for navigating the site and avoiding crowds?",
    "votes": 6,
    "author": "whitewolf",
    "article_id": 42,
    "created_at": 1739145601000
  },
  {
    "body": "Geralt, arrive early in the morning or late in the afternoon to avoid peak crowds. Take the back trail to the Monastery for a quieter experience. Also, hire a local guide for insights and hidden gems.",
    "votes": 5,
    "author": "dragonrider",
    "article_id": 42,
    "created_at": 1739145700000
  },

  // Article 43: Witcher’s Medieval Villages (whitewolf, travel)
  {
    "body": "Geralt, your medieval village recommendations are charming. I'm planning a trip to Transylvania. Any local dishes I should try while there?",
    "votes": 5,
    "author": "bladerunner",
    "article_id": 43,
    "created_at": 1739232001000
  },
  {
    "body": "Deckard, definitely try sarmale (cabbage rolls) and mămăligă (polenta). For dessert, papanasi (fried dough with cheese and jam) is a must. Enjoy the local cuisine!",
    "votes": 4,
    "author": "whitewolf",
    "article_id": 43,
    "created_at": 1739232100000
  },

  // Article 44: Chookity’s Space Tourism (chookity, travel)
  {
    "body": "Mooncake, your space tourism guide is out of this world! I'm saving up for a suborbital flight. Any tips on preparing physically and mentally for the experience?",
    "votes": 7,
    "author": "avadakedavra",
    "article_id": 44,
    "created_at": 1739318401000
  },
  {
    "body": "Voldemort, start with cardio and strength training to handle G-forces. Mentally, practice mindfulness and visualization to stay calm. Also, watch videos of past flights to know what to expect. Chookity!",
    "votes": 6,
    "author": "chookity",
    "article_id": 44,
    "created_at": 1739318500000
  },

  // Article 45: Replicant’s Neon Cities (bladerunner, travel)
  {
    "body": "Deckard, your neon cities guide is vibrant. I'm planning a trip to Tokyo. Any hidden gems or off-the-beaten-path spots you recommend?",
    "votes": 8,
    "author": "youshallnotpass",
    "article_id": 45,
    "created_at": 1739404801000
  },
  {
    "body": "Gandalf, check out the Yanaka district for a quieter, traditional Tokyo experience. Also, the Robot Restaurant in Shinjuku is a unique, neon-lit spectacle. Enjoy your trip!",
    "votes": 7,
    "author": "bladerunner",
    "article_id": 45,
    "created_at": 1739404900000
  },

  // Article 46: Wizard’s Bitcoin Basics (youshallnotpass, crypto)
  {
    "body": "Gandalf, your Bitcoin guide is very informative. I'm new to crypto and a bit nervous about security. Any tips for keeping my Bitcoin safe?",
    "votes": 6,
    "author": "dragonrider",
    "article_id": 46,
    "created_at": 1739491201000
  },
  {
    "body": "Daenerys, use a hardware wallet like Ledger or Trezor for long-term storage. For smaller amounts, a software wallet with strong passwords and 2FA is fine. Never share your private keys!",
    "votes": 5,
    "author": "youshallnotpass",
    "article_id": 46,
    "created_at": 1739491300000
  },

  // Article 47: Dark Lord’s DeFi Secrets (avadakedavra, crypto)
  {
    "body": "Voldemort, your DeFi guide is intriguing. I'm interested in yield farming but worried about the risks. Any advice on how to start safely?",
    "votes": 5,
    "author": "chookity",
    "article_id": 47,
    "created_at": 1739577601000
  },
  {
    "body": "Mooncake, start with small amounts on well-established platforms like Aave or Compound. Research the protocols thoroughly and be aware of impermanent loss. Diversify your investments to spread risk.",
    "votes": 4,
    "author": "avadakedavra",
    "article_id": 47,
    "created_at": 1739577700000
  },

  // Article 48: Dragon Queen’s NFT Empire (dragonrider, crypto)
  {
    "body": "Daenerys, your NFT guide is fascinating. I'm an artist looking to mint my first NFT. Any tips on choosing the right platform and setting a price?",
    "votes": 7,
    "author": "whitewolf",
    "article_id": 48,
    "created_at": 1739664001000
  },
  {
    "body": "Geralt, for minting, platforms like OpenSea or Rarible are popular. Set your price based on similar artworks and your audience. Start with a lower price to attract buyers and build your reputation.",
    "votes": 6,
    "author": "dragonrider",
    "article_id": 48,
    "created_at": 1739664100000
  },

  // Article 49: Chookity’s Crypto Wallets (chookity, crypto)
  {
    "body": "Mooncake, your wallet guide is very helpful. I'm considering a hardware wallet. Is there a significant difference between Ledger and Trezor?",
    "votes": 4,
    "author": "bladerunner",
    "article_id": 49,
    "created_at": 1739750401000
  },
  {
    "body": "Deckard, both are excellent, but Ledger supports more coins and has a sleeker design. Trezor is open-source, which some prefer for transparency. Choose based on your needs and preferences. Chookity!",
    "votes": 3,
    "author": "chookity",
    "article_id": 49,
    "created_at": 1739750500000
  },

  // Article 50: Witcher’s Blockchain Guide (whitewolf, crypto)
  {
    "body": "Geralt, your blockchain explanation is clear and concise. I'm curious about the environmental impact of blockchain. Are there any eco-friendly alternatives?",
    "votes": 6,
    "author": "avadakedavra",
    "article_id": 50,
    "created_at": 1739836801000
  },
  {
    "body": "Voldemort, yes, Proof-of-Stake (PoS) blockchains like Ethereum 2.0 and Cardano are much more energy-efficient than Proof-of-Work chains like Bitcoin. They consume significantly less power.",
    "votes": 5,
    "author": "whitewolf",
    "article_id": 50,
    "created_at": 1739836900000
  },

  // Article 51: Wizard’s Leadership Lessons (youshallnotpass, business-finance)
  {
    "body": "Gandalf, your leadership lessons are inspiring. I'm a new manager and sometimes struggle with decision-making. Any advice on how to make better decisions under pressure?",
    "votes": 8,
    "author": "dragonrider",
    "article_id": 51,
    "created_at": 1739923201000
  },
  {
    "body": "Daenerys, gather as much information as possible quickly, consult with trusted team members, and trust your instincts. Also, practice scenario planning to prepare for different outcomes. You'll get better with experience.",
    "votes": 7,
    "author": "youshallnotpass",
    "article_id": 51,
    "created_at": 1739923300000
  },

  // Article 52: Dragon Queen’s Startup Tips (dragonrider, business-finance)
  {
    "body": "Daenerys, your startup tips are invaluable. I'm working on my pitch deck. Any key elements I should focus on to impress investors?",
    "votes": 7,
    "author": "whitewolf",
    "article_id": 52,
    "created_at": 1740009601000
  },
  {
    "body": "Geralt, highlight your unique value proposition, market opportunity, and traction. Show a clear business model and financial projections. And most importantly, convey your passion and vision for the startup.",
    "votes": 6,
    "author": "dragonrider",
    "article_id": 52,
    "created_at": 1740009700000
  },

  // Article 53: Dark Lord’s Investment Strategies (avadakedavra, business-finance)
  {
    "body": "Voldemort, your investment strategies are cunning. I'm interested in real estate investing. Any tips for beginners looking to buy their first rental property?",
    "votes": 5,
    "author": "chookity",
    "article_id": 53,
    "created_at": 1740096001000
  },
  {
    "body": "Mooncake, start by researching markets with good rental demand and growth potential. Calculate your expected ROI, factoring in mortgage, taxes, and maintenance. Also, consider hiring a property manager if you're not local.",
    "votes": 4,
    "author": "avadakedavra",
    "article_id": 53,
    "created_at": 1740096100000
  },

  // Article 54: Chookity’s Gig Economy (chookity, business-finance)
  {
    "body": "Mooncake, your gig economy guide is very practical. I'm thinking of freelancing as a side hustle. Any advice on balancing it with a full-time job?",
    "votes": 4,
    "author": "bladerunner",
    "article_id": 54,
    "created_at": 1740182401000
  },
  {
    "body": "Deckard, set clear boundaries for your freelancing time, like evenings or weekends. Use project management tools to stay organized, and don't overcommit. Start with one or two clients to test the waters. Chookity!",
    "votes": 3,
    "author": "chookity",
    "article_id": 54,
    "created_at": 1740182500000
  },

  // Article 55: Witcher’s Financial Planning (whitewolf, business-finance)
  {
    "body": "Geralt, your financial planning guide is straightforward and helpful. I'm trying to save for a down payment on a house. Any tips on accelerating my savings?",
    "votes": 6,
    "author": "youshallnotpass",
    "article_id": 55,
    "created_at": 1740268801000
  },
  {
    "body": "Gandalf, automate your savings with monthly transfers to a high-yield account. Cut unnecessary expenses, like dining out, and consider a side gig for extra income. Also, look into first-time homebuyer programs for assistance.",
    "votes": 5,
    "author": "whitewolf",
    "article_id": 55,
    "created_at": 1740268900000
  }
];