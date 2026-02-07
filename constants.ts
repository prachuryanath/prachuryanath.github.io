import {
  type Publication,
  type SocialLink,
  type BlogPost,
  type Photo,
  type Experience,
  type Project,
  type Education,
  type SkillCategory,
} from './types';
import { IconGitHub, IconLinkedIn, IconScholar, IconMail, IconInstagram, IconResume } from './components/Icons';

export const PROFILE = {
    name: 'Prachurya Nath',
    title: 'Computational Engineering Student',
    summary: 'A passionate and driven student pursuing a Master\'s in Computational Engineering, with a strong foundation in Electrical Engineering and hands-on experience in machine learning, deep learning, and software development. Seeking to leverage skills in privacy-preserving technologies and model optimization to solve complex, real-world problems.',
    avatar: 'https://raw.githubusercontent.com/prachuryanath/prachuryanath.github.io/refs/heads/main/copenhagen.JPG',
    contact: {
      email: 'prachuryanath00@gmail.com',
    },
    socials: [
      { name: 'Email', url: 'mailto:prachuryanath00@gmail.com', icon: IconMail },
      { name: 'GitHub', url: 'https://github.com/prachuryanath', icon: IconGitHub },
      { name: 'LinkedIn', url: 'https://www.linkedin.com/in/prachuryanath/', icon: IconLinkedIn },
      { name: 'Resume', url: 'https://drive.google.com/file/d/1fiMXn7YBrMqZIMcoG1YLus11fFcQgCbX/view?usp=sharing', icon: IconResume }, // Add a link to your resume PDF here
      { name: 'Google Scholar', url: 'https://scholar.google.com/citations?user=your-scholar-id', icon: IconScholar }, // Replace with actual scholar ID if available
      { name: 'Instagram', url: 'https://www.instagram.com/prachuryeah/', icon: IconInstagram },
    ],
};


export const EDUCATION: Education[] = [
  {
    institution: 'Friedrich-Alexander-Universität Erlangen-Nürnberg',
    degree: 'Masters of Science in Computational Engineering',
    duration: 'Oct 2023 - Present',
  },
  {
    institution: 'National Institute of Technology Silchar',
    degree: 'Bachelor of Technology in Electrical Engineering',
    duration: 'Jul 2019 – June 2023',
  },
];

export const EXPERIENCE: Experience[] = [
    {
        company: 'Fraunhofer IGD',
        role: 'Master Thesis',
        duration: 'July 2025 – Jan 2026', 
        description: [
            'Developing a novel, privacy-preserving framework for on-device face identification on memory-constrained microcontrollers (< 1MB RAM).',
            'Designing efficient deep learning architecture using various model optimizing techniques such as pruning, quantization and knowledge distillation.',
            'Creating an incremental learning system that allows the model to learn on new users locally, without any network connectivity or central servers.'
        ],
    },
    {
        company: 'National Institute of Technology Silchar',
        role: 'Bachelor Thesis',
        duration: 'July 2022 – May 2023',
        description: [
            'Improved the accuracy of automated fish species classification and disease detection by designing and implementing a multimodal underwater detection system.',
        ],
    },
    {
        company: 'IIT Guwahati',
        role: 'Research Intern',
        duration: 'July 2021 – Sept 2021',
        description: [
            'Extracted and preprocessed thousands of Youtube comments from Json files for language analysis.',
            'Performed semantic analysis on manually labeled, Latinized Assamese texts, with a fine-tuned Muril (BERT) model.',
        ],
    },
];

export const PROJECTS: Project[] = [
    {
        title: 'Reproducibility Study in Computer Vision',
        description: 'Critically analysed 50 research papers from top-tier conferences (CVPR, MICCAI) to evaluate the feasibility and reproducibility of their methods. Executed a complete reproduction of Hierarchical Histogram Threshold Segmentation (CVPR 2024) to validate its findings.',
        technologies: ['Python', 'Pytorch', 'Tensorflow'],
    },
    {
        title: 'SabhyaServer Recommendation',
        description: 'Created a multi-class topic classifier by fine-tuning a DistilBERT model for automated keyword extraction. Built a content recommendation system that suggests files to users through semantic vector embeddings.',
        technologies: ['Python', 'Flask', 'Scikit-learn', 'Tensorflow'],
        link: 'https://github.com/azad-ali786/SabhyServer_RecommendationSys_SIH',
    },
];

export const PUBLICATIONS: Publication[] = [
  {
    title: 'Image Caption Generation for Low-Resource Assamese Language',
    authors: ['Prachurya Nath', 'Prottay Kumar Adhikary', 'Pankaj Dadure', 'Partha Pakray'],
    venue: 'ROCLING2022 (The 34th Conference on Computational Linguistics and Speech Processing)',
    year: 2022,
    description: 'A study on generating descriptive captions for images in Assamese, a low-resource language, contributing to regional language processing.',
  },
  {
    title: 'Investigation of negation effect for English-Assamese machine translation',
    authors: ['Sahinur Rahman Laskar', 'Abinash Gogoi', 'Samudranil Dutta', 'Prottay Kumar Adhikary', 'Prachurya Nath', 'Partha Pakray', 'Sivaji Bandyopadhyay'],
    venue: 'Sādhanā: Springer Journal volume 47, Article number: 238',
    year: 2022,
    description: 'An investigation into the challenges and effects of handling negation in machine translation between English and Assamese.',
  },
];

export const TECHNICAL_SKILLS: SkillCategory[] = [
    {
        name: 'ML Frameworks',
        skills: ['Tensorflow', 'Pytorch', 'Scikit-Learn'],
    },
    {
        name: 'Data Science',
        skills: ['Pandas', 'Numpy', 'Matplotlib', 'TFLite'],
    },
];

export const BLOG_POSTS: BlogPost[] = [
    {
      title: '2025 : A Year in Review',
      slug: 'day-11',
      date: 'December 31, 2025',
      excerpt: " so, how to write this ? it's 7 pm here on the 31st of january. this year felt like something that was both fast and slow at the same time. maybe that's what it feels like when you stay in your room for almost three-quarters of the year and don't really see a change in your environment. ",
      content: `so, how to write this ? it's 7 pm here on the 31st of january. this year felt like something that was both fast and slow at the same time. maybe that's what it feels like when you stay in your room for almost three-quarters of the year and don't really see a change in your environment. i tried to gather my thoughts about what happened this year, and it felt blank and messy at the same time. so where do i even start ?

at the beginning of the year, i was back home with my family in assam, and maybe i was happier then. it was warm and sunny, very different from the negative temperatures where i'm writing this from now. 2025 felt special in some way, maybe because it's a quarter of a century. even as a child, back in school, i used to think that i would have everything figured out by 2025.

2025 was also the year i completed 25 years on this planet (hurray, silver jubilee), but i didn't really celebrate it. no cake, no big plan. instead, i went on a hike nearby. as a child, i also had this silly thought of marrying the love of my life in 2025. yeah, it was stupid. i think i let go of that idea around the time i turned 20, when i started figuring out life a little bit, or maybe not, i don't really know.

as usual, summer took me back to the alps. the mountains kept calling me again. the german alps are beautiful in their own way, even though all the attention usually goes to switzerland. maybe they deserve it, although i couldn't go there this year either. but i did go to italy, and specifically venice, which had always been a dream destination for me, even with its reputation of being overly touristy.

yes, it was crowded, full of tourists, full of couples, full of love. bunny once called it the dharavi of europe, but to me it felt more like the small galis of old delhi. if you wander enough, you do find corners where there are no tourists at all. after that came bologna and milan. bologna was hot, milan was beautiful, especially the duomo and the churches.

most of that trip was also for blackpink, whom i finally got to see, even if it was from almost half a kilometer away. as someone who has followed them since 2019, it still felt special. mostly i captured it on my phone, but what stayed with me more were the kids there, and their parents standing beside them, supporting them, finding joy in their children's happiness.

another thing i did this year was being a little bit brave. i confessed to someone how i felt about her for years. that alone made my heart feel lighter. as someone who has a habit of keeping things hidden inside, it felt good to finally let something out.

apart from that, this year was a mix. some days were good, some days were bad. i know i tend to see things more negatively than they really are, and that's something i need to work on. the feeling that everyone is judging me, or hating me for how i feel, was there this year too.

what keeps me alive, honestly, is art. songs, movies, series, sometimes even reels (maybe not always). winters here are dark and gloomy, and that feeling takes a toll. but in the end, even winter ends one day. until that day comes, i'm trying to stay hopeful.

maybe 2026 will be better. maybe i'll see growth in myself.`
    },
    {
      title: 'regret of everything',
      slug: 'day-10',
      date: 'December 16, 2025',
      excerpt: " i feel regret about almost everything in the past, every single day. it makes me question myself why i'm not living my life to the fullest. i want to be happy, i want to feel content, i want to enjoy the present that my younger self once dreamt of living. but am i even living my own life in the moment ? ",
      content: `i feel regret about almost everything in the past, every single day. it makes me question myself why i'm not living my life to the fullest. i want to be happy, i want to feel content, i want to enjoy the present that my younger self once dreamt of living. but am i even living my own life in the moment ? most of the times, i can't even gather my thoughts properly, jumping from one thought to another, without finishing any of them.

the smallest details from the past, things i should have forgotten long back. they were tiny moments, insignificant even, but they still stay with me. what intrigues me more is that in the past few months, i've started remembering very old dreams - dreams from almost a decage ago that i had completely forgotten. why are they coming back now ? is it so that i regret even more ? i don't know what to do with all these emotions when they surface all at once when you've nobody to share it with.

i kept thinking about tiny decisions and moments, how one small choice would have altered everything. would i be happier now if i had chosen something differently back then ? or would i be in a worse place who knows ? i don't know which thought scares me more. my mind just keeps playing and replaying alternate versions of my life that never happened.

there's this dialogue from “arrival (2016)” movie that says,

“if you could see your whole life from start to finish, would you change things”

and the reply goes,

“maybe i'd say what I felt more often. i don't know”.

and i felt that deeply, maybe i should have said things more often. done things differently. tried more, been more open, more confident, more expressive. said things out loud instead of keeping everything inside and later regretting it. the feeling of words unsaid stays heavier than facing the reality then.

but does any of this even matter now ? i realize i'm spiraling back into the past again. what if the future me looks at this current 2025 me and feels the same disappointment that i'm feeling about the young me ? that i still didn't act, didn't speak, didn't try to change. what if this regret just keeps repeating itself in a cycle, changing years although remaining the same ?

then what does that make me ? a person who feels more ? a person who reflects way too much ? a human being trying to understand himself more ? or being just a nobody, stuck between who i was, who i am and who i'm afraid i'll never be.`
    },
    {
      title: 'if everything ends, what really matters.',
      slug: 'day-9',
      date: 'November 25, 2025',
      excerpt: " last weekend, i drank coffee in the evening. maybe i shouldn't have done that. i stayed in bed from 1 am till almost 4, just staring into the dark ceiling, trying hard to fall asleep while my mind kept moving on its own. one thought leads to another, one question dissolve into a memory of the past, then into another question like a spiral. ",
      content: `last weekend, i drank coffee in the evening. maybe i shouldn't have done that. i stayed in bed from 1 am till almost 4, just staring into the dark ceiling, trying hard to fall asleep while my mind kept moving on its own. one thought leads to another, one question dissolve into a memory of the past, then into another question like a spiral.

somewhere in that mess, a line came to my mind :

*" if everything ends, what really matters? " *

i saved it in my phone and tried to sleep again. and now after couple of days, as the clock hits 3 am, i'm here writing this.

i started to realise, to think this deeply, you need time. quiet time. most days, life moves so fast that you don't get a single second to even hear yourself. people work, struggle, survive. with the majority fighting for small basic necessities of life like shelter, money, stability. then, you don't sit around or try to sleep in my case questioning the meaning of life. you just repeat your days and hope they get easier. that's not a bad thing, that's just a reality of life.

but on some nights like these, my mind slips into that silent pessimism, the kind that makes you feel like nothing really lasts. from the smallest feelings in your heart to the biggest moments of your life, everything fades, everything just ends. although the feeling of losing people or things in general scares me, i'm more scared of how fast time moves when i'm not looking.

nothing really matters unless we decide it does. we search for meaning in things trying to make it stay, holding on like it is something we were promised for forever. if everything ends one way or the other anyway, why do we pretend it won't end for us one day ?

and if everything ends, what really matters ?

i don't know. maybe you don't either. and that makes us the two of us.`
    },
    {
      title: 'for the two people who read this',
      slug: 'day-8',
      date: 'November 19, 2025',
      excerpt: " dostoevsky once said, ' I want to talk about everything with at least one person as I talk about things with myself. ' ",
      content: ` who am i writing for ? is it just for myself, to hear my own mind more clearly ? because, honestly, most of the time, all i do is talk to myself. dostoevsky once said, “ I want to talk about everything with at least one person as I talk about things with myself. ” i am pessimistic about finding that one person ever, so maybe i want to keep writing for myself.

and still, if only two people open the link and read this, i'm not unhappy about it. but in these modern times, when we live in a world of likes, followers and subscribers, it's hard to not think about it. a part of me still wonders who's listening.

is it better when only a few people read or watch ? does it give us the permission to be more real ? i can talk about things i've never said out loud. sure, i can also do that in a personal diary, but having a public one, that too online feels strangely comforting. like someone stumbling upon this without searching for it and maybe relate to a piece of it. and when only a few people read, no one asks questions, so i can whisper truths without consequences. maybe that's what i always wanted

the tiny, private details so here we go. the password on my phone that's been the same for six years, because it still means something. so this is it, that's how it ends maybe, it's just a muscle memory now. people say it takes twenty-one days to form a habit, so this is that habit multiplied by a hundred. the old chats i revisit even when i know i shouldn't, even when my friends say not to. i understand them, but these are the places where my heart returns to when no one is looking. and there are the songs tied to a person, or the movie they recommended. these little things carry you back to different people, as if parts of them quietly stayed inside you.

am i sharing too much ? what if a hundred people read this ? honestly, that probably won't happen. but i still wonder, do people hold on to small things the way i do ? do they think about a day from years again and again, or do they forget about it completely ? these fragments of memories inside my memories… they stay, they don't fade.

am i being vulnerable now ? probably. but maybe that's what this space is for. `
    },
    {
      title: 'we can both be human',
      slug: 'day-7',
      date: 'November 14, 2025',
      excerpt: " what makes us human ? is it the happiness we keep chasing, or the pain we learn to live with ? the guilt of creating something that turns bad, or the grief of losing something we thought it would stay for a long time. artists often say the best art comes from being broken - maybe that's when we are the most human. we can fail, we will get hurt but we also feel - it's just who we are being human. ",
      content: ` *' "rest now, father. perhaps now, we can both be human." - creature'*

what makes us human ? is it the happiness we keep chasing, or the pain we learn to live with ? the guilt of creating something that turns bad, or the grief of losing something we thought it would stay for a long time. artists often say the best art comes from being broken - maybe that's when we are the most human. we can fail, we will get hurt but we also feel - it's just who we are being human.

the creature longs for human connection, first from his creator, and then from a world that never gave him chance. he wants to grow, he wants to belong, but he struggles, in a cruel world where he is seen as a monster. he didn't ask to be born, yet punished for just existing. broken and discarded, like so many of us feel in our journey of life. he tries to understand his creation, don't we all : where do we come from, and where do we go ?

and even when his creator names him monster, he still learns. he witnesses the terrors of mankind, but he also understands sometime that's how life is. wolves don't hate the sheep and in the same way, wolves are not hated by the hunter but violence still exists. the whole world is harsh, but doesn't need to be always personal.

*' "to be lost and to be found, that is the lifespan of love." - elizabeth '*

maybe love is exactly that, losing ourselves, finding ourselves and living in that brief moment in between. seeking and longing for something we can't name, until it names us when the time arrives. love can grow, break and reshape itself completely around us. we long for warmth, recognition, or just a place to rest - maybe that's what love is. even when the world turns cold, we long for someone just like our heart wants to keep reaching a new meaning.

our lives are not defined by a singular choice, or a singular identity. we can break, we can rebuild, we can change. the toughest part is getting the motivation to do so, and in the best way, it have to come from within ourselves

i was really moved by this movie. this isn't a review - i am not capable of writing that. these thoughts are mine, mixed with others' reviews i read up elsewhere. but the movie felt beautiful.`
    },
    {
      title: 'do i believe in soulmates ?',
      slug: 'day-6',
      date: 'November 8, 2025',
      excerpt: " yes, probably a straight yes. as a hopeless romantic who's never been in a relationship, i've always wanted a kind of love that never fades away, not after years, not even after decades. but how would i even define love ? ",
      content: `yes, probably a straight yes. as a hopeless romantic who's never been in a relationship, i've always wanted a kind of love that never fades away, not after years, not even after decades. but how would i even define love ?

for someone who believes this is our only life - no reincarnation, no second chances, why have i always been so scared to take risks in love ? maybe because, love always felt too fragile, infinite and honest at the same time for me. for me, love is something about comfort, quiet and simple understanding, or just growing together helping each other in return of nothing. but it can definitely also be about sharing pain, believing in distance dorsn't really matter or just silence that keeps playing in between.

love can show up in so many forms. sometimes, love can be just a text you keep rereading, a song you can't skip, a face that keeps appearing in your mind at random day or night hours. other times, it's not even visible, you do something unconsciously in the same way that a small part always lives inside.

and then there's this question, do soulmates really exist, or is it just my mind creating meaning to make sense of my loneliness ? what if the life i dreamt of living with someone will forever be a dream, one that will never take place in reality ? did i get too late ?

as an infp (if you know mbti), it's really hard to build meaningful connections being that reserved, introverted or just under confident. it takes time, trust and a kind of quiet understanding. my mind says a name, maybe a person, maybe an illusion of one, or maybe just my way of comforting myself that there's still someone out there meant for me. maybe there's not.

maybe that's what a soulmate is, not someone who completes you but someone who mirrors the part of you that you've been trying to understand all along.`
    },
    {
      title: 'am i missing something ?',
      slug: 'day-5',
      date: 'November 4, 2025',
      excerpt: " recently, i've been feeling like i'm missing something. maybe i've always felt that way as far back as i can remember, something like missing a part of myself that i never truly had. ",
      content: `recently, i've been feeling like i'm missing something. maybe i've always felt that way as far back as i can remember, something like missing a part of myself that i never truly had.

the warmth of a familiar touch, the call of home from thousand miles away, the kind of effortless happiness that's easy to exist. i miss love so deep i won't ever be able to express, or a true friendship which can keep me awake for the whole night for no specific reason. it's really hard to describe it, like how we long for some things and feel their absence without never defining it in simple terms.

some days feel like i'm missing my own soul, though to be frank i don't believe in the concept of souls, the afterlife, or even anything beyond this one existence of life. but what is this ache that doesn't seem to end if it's just not a soul ?

maybe this is just nostalgia for a version of me that was never there, or condolences that i offer myself for the way i exist ?

this ain't a call for prayer. as someone who don't want to believe in redemption, signs or just prayers, this is a just a reminder for myself - that even when i feel lost, there's still something inside me. i need to find it myself, and hope for a change.`
    },
    {
      title: 'comfort of everyday',
      slug: 'day-4',
      date: 'November 1, 2025',
      excerpt: " it's strange how comfort starts to look like repetition. and in the same way, repetition sometimes begins to feel like comfort. but somewhere in between, it also make me question myself, am i moving ahead at all, or just circling the same path every year. ",
      content: `*'every night feels the same - same songs, same scrolling, same staring into the dark.'*

it's strange how comfort starts to look like repetition. and in the same way, repetition sometimes begins to feel like comfort. but somewhere in between, it also make me question myself, am i moving ahead at all, or just circling the same path every year.

routine gives us comfort when life feels unpredictable. people say, when life gives you lemons, make lemonade. and i did that, over and over again. maybe now the jar is overflowing, maybe i've been drinking the same lemonade for too long. maybe the peace i've been looking for was just a “pause” that never ended.

it's been two years and a month now, in the same room, same bed, same quiet little town. sometimes i feel like time stopped here, like i just stopped myself. i scroll through other people's lives, and see how far they've gone. and somewhere inside, i feel what if i just stayed behind when compared to others ? that makes me jealous, even if i won't like to admit it.

yet there are small escapes - when i just walk around the town capturing random things that catch my eye, sometimes people or sometime just trees and buildings. sometimes i just immerse myself in movies or a new series, losing myself in a world that makes me forget everything. and on some days, i try to go to the mountains, where everything feels quieter and when you look at your surroundings from a height, there's a kind of peace which is tough to describe. maybe these moments remind me of not being stuck, that i can still see, still feel or just create something.

it's not the routine which is the problem, maybe the way i think about it. the constant need of comparing myself to others, the constant ask of validation, or the need to be somewhere else, or just to be someone else. maybe this comfort isn't a trap, but some kind of peace i'm learning to accept.`
    },
    {
      title: 'between songs',
      slug: 'day-3',
      date: 'October 29, 2025',
      excerpt: "when one song ends and another begins, there's a strange silence in between. a second of emptinesss, a moment of nothingness. that in-between feels too familiar. like waiting for a message that never comes, or standing at a station just after the train just left. isn't it the same with us ? ",
      content: `when one song ends and another begins, there's a strange silence in between. a second of emptinesss, a moment of nothingness. that in-between feels too familiar. like waiting for a message that never comes, or standing at a station just after the train just left. isn't it the same with us ? there might be so much happening in your life, but there will be a moment when everything stops for you. you will find it so hard to make sense of the stillness, but deep down you know that you have to keep moving forward towards the next stop.

so, it might be difficult for someone like me to truly understand how peace feels like, but i know for certain that silence isn't peace, silence is the echo of what just existed. in the same sense, noise isn't totally chaos, sometimes that's the way to remind ourselves we're still alive . when the noise starts to fade away, will you feel content ? or will you start to miss it, the way we sometimes miss things that once overwhelmed us ? what about the silence in between, does it bring calmness or it reminds you of what's gone ? some people long for something, some linger in the middle, and there are those who keep waiting for the next song to make sense of their quiet.

and definitely, that's the hardest part. to learn to live in those moments of pause. they will stretch longer than you expect, where there's both confusion and comfort. memories will return without permission, the things you definitely didn't ask for. you have to just feel the pause, because it doesn't ask us for meaning, it will simply want to exist as long as it feels like.

so coming back to the silence in between songs (hoping you haven't turned on crossfade in settings), you never really know what will play if shuffle is on. yet, you don't turn it off, you just wait for the next tone to catch you again . isn't it same with life ? no one knows what will happen in the future, but you still have to keep playing your song today.

maybe in the end, it's not about avoiding noise or chasing peace, but learning to just listen, and really listen to what that silence wants to tell you. the pause might not be always comforting, but maybe it's the only place where we honestly hear ourselves clearly, even it's just for a brief moment.

maybe all we need is to learn to live in the brief silence, the one between a song and the next.`
    },
    {
      title: '2:11 AM',
      slug: 'day-2',
      date: 'October 28, 2025',
      excerpt: "so, it's currently 2:11 am. i promised myself yesterday that i'd write something everyday to make it into a habit, so here it goes. the world's currently asleep, at least in my timezone, but my mind is wide awake. there's a kind of peace the night arrives with, bringing silence yet heavy in its own way as silence doesn't always mean calmness.",
      content: `so, it's currently 2:11 am.

i promised myself yesterday that i'd write something everyday to make it into a habit, so here it goes. the world's currently asleep, at least in my timezone, but my mind is wide awake. there's a kind of peace the night arrives with, bringing silence yet heavy in its own way as silence doesn't always mean calmness.

i've been sleeping after 2 am for years now, most nights. maybe i've grown to love the night, because it feels familiar, maybe with the darkness or maybe it's that i don't want the new day to begin yet. cause when i wake up in the morning, i always feel that the world will reset with a new beginning and i am not ready for that. there's also a comforting thing about nights which is hard to describe - just me quietly trying to understand myself.

a few days ago, a sentence kept playing in my mind,
*'kehne ko bahut kuch hai, magar kisse kahe hum.'*

yeah, it's from a song , but at that moment i couldn't even remember where it came from, but it kind of arrived uninvited. maybe because that's how memories work - they come back when you have least expect them, just to remind you something. that line also gave me a reason to start writing again - maybe to journal my thoughts or just to share them somewhere outside my head.

i think i've found a home in these nights. it's crowded and messy now with thoughts, but it's also where i feel the safest. maybe that's why i don't sleep early anymore, maybe i've grown way too comfortable living like this.

maybe it'll will end one day. maybe tomorrow i'll sleep early, most likely not. maybe not for another thousand nights, but who can really tell the future. for now, the night asks for my company softly, and by morning, this too will become the past.`
    },
    {
      title: 'on my mind',
      slug: 'day-1',
      date: 'October 26, 2025',
      excerpt: "i want to write something. i want to get back at life. i have lived so long living in the past that i've forgotten how to be in the present. there's always something on my mind, an endless train of thoughts that i keep talking to myself to find answers.",
      content: `i want to write something. i want to get back at life. i have lived so long living in the past that i've forgotten how to be in the present. there's always something on my mind, an endless train of thoughts that i keep talking to myself to find answers.

is this life even worth living or something that i can cherish only after it's gone ? on my ears, music plays endlessly every hour, every day. it's my way to calm myself down, to quiet the noise. but sometimes i wonder will this music as a kind of escape, a wall i built for myself will last forever or i'll just get tired of it one day.

i miss feeling alive - not in the adrenaline sports kind of way. but just in the ordinary moments where you pause for a second, look at your life and just feel present and content. i try to move on with the day pretending i'm all fine, but deep inside there's a silent ache which walks with me as a shadow, never fading away.

i keep telling myself it's all just a phase as everyone says and goes through, but we all know phases are meant to pass. there will only be a few nights when i'm not staring at the ceiling and keep questioning myself on what i'm waiting for - a sign, an answer, or just some kind of wisdom to make sense of it all. but i won't say there's no hope, i still quietly hope that when i wake up one morning, everything i kept holding on to which turned out to be heavy will be gone. that i'll notice joy in the smallest things - the sound of rain on a hot summer day, the glimpse of sun on a cloudy winter morning or just an old couple holding hands walking down the street.

maybe there's a version of me in the future who will finally learn to live in the present, and the only way i can reach him is to slowly building upon the present, one small moment at a time.`
    },
];

export const PHOTOGRAPHY_IMAGES: Photo[] = [
    { id: 1, src: 'https://raw.githubusercontent.com/prachuryanath/prachuryanath.github.io/refs/heads/main/imgs/IMG_5980.jpg', alt: 'A street in a European city at night', caption: 'Rialto Bridge' },
    { id: 2, src: 'https://raw.githubusercontent.com/prachuryanath/prachuryanath.github.io/refs/heads/main/imgs/PXL_20250517_123037687.jpg', alt: 'The Eiffel Tower in Paris', caption: 'Alpine Dream' },
    { id: 3, src: 'https://raw.githubusercontent.com/prachuryanath/prachuryanath.github.io/refs/heads/main/imgs/PXL_20250518_123550246.jpg', alt: 'A serene view of the Swiss Alps', caption: 'Beauty of Peacock' },
    { id: 4, src: 'https://raw.githubusercontent.com/prachuryanath/prachuryanath.github.io/refs/heads/main/imgs/PXL_20250907_152037502.jpg', alt: 'The Colosseum in Rome', caption: 'Walberla Hike' },
    { id: 5, src: 'https://raw.githubusercontent.com/prachuryanath/prachuryanath.github.io/refs/heads/main/imgs/PXL_20250920_153414843.jpg', alt: 'Canals of Venice', caption: 'Wurzburg Views' },
    { id: 6, src: 'https://raw.githubusercontent.com/prachuryanath/prachuryanath.github.io/refs/heads/main/imgs/PXL_20251024_092030545%20(1).jpg', alt: 'A quiet German village street', caption: 'Autumn Charm' },
];
