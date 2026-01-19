import React from 'react';
import { PrincipleItem, ScenarioItem, LearningPoint } from './types';
import { 
  BeakerIcon, 
  BookOpenIcon, 
  ChatBubbleLeftRightIcon, 
  ScaleIcon, 
  ShieldCheckIcon 
} from '@heroicons/react/24/outline';

export const principlesData: PrincipleItem[] = [
  {
    title: "Giving examples of AI output",
    icon: <BeakerIcon className="w-6 h-6" />,
    points: [
      "Always list the model, tool, and prompt when sharing outputs (date if using historical examples).",
      "Do not report on any examples of AI performance based on a single use; always report out of how many tries the result obtains.",
      "Before sharing examples of LLM limitations or capabilities, confirm whether there is recent research that confirms the issue still exists or the capabilities have been shown to replicate.",
      "If there is variability in how the model responds to different prompts, always try multiple models if you are giving an example as evidence of general behavior."
    ]
  },
  {
    title: "Sharing AI research",
    icon: <BookOpenIcon className="w-6 h-6" />,
    points: [
      "Never reference media reports about research, always read the original paper (this includes science tabloids like SciAm, Quanta Magazine, or University press releases).",
      "When sharing research results always include when empirical work was done (months matter in AI).",
      "Never simply repeat points from abstract or discussion section, always check that the methods warrant the conclusions.",
      "Correct documents, slides, and posts when new evidence appears."
    ]
  },
  {
    title: "Making general statements about AI",
    icon: <ChatBubbleLeftRightIcon className="w-6 h-6" />,
    points: [
      "Always be clear what kind of AI you're talking about when it is not LLMs (for example when you cite papers published before 2022).",
      "Always mention how representative you think an issue is when sharing anecdotes.",
      "Avoid journalistic headline phrases like 'research shows AI could' if you cannot substantiate the quality of the research and its representativeness.",
      "Admit uncertainty when appropriate (accompany statements about what AI will never/definitely do with a disclaimer about the poor track record of such predictions)."
    ]
  },
  {
    title: "Expertise and professional integrity",
    icon: <ShieldCheckIcon className="w-6 h-6" />,
    points: [
      "Be clear about the limits of your own expertise; if you do not follow developments in detail, always check the latest state of play.",
      "Do not use metaphors of AI if you cannot articulate the exact nature of the target domain.",
      "Do not assume that general statements are necessarily illustrative of technical expertise (for example 'ChatGPT was trained on all the internet').",
      "Apply the same standards of rigor and integrity you expect from students to every statement you make about AI."
    ]
  },
  {
    title: "Contributing to healthy debate",
    icon: <ScaleIcon className="w-6 h-6" />,
    points: [
      "Avoid using emotionally laden terms like 'big tech', 'tech bros', 'hype', 'exciting', 'game changing', 'theft', 'destroying the planet'.",
      "Be explicit when your expert position on facts becomes a personal policy preference.",
      "When using metaphors and analogies, always explore alternative framings, not just the ones most supportive of your position (or the most emotionally evocative ones)."
    ]
  }
];

export const learningPoints: LearningPoint[] = [
  {
    question: "What relevance does the claim have for you?",
    description: "Are you trying to make practical decisions for yourself, policy, or just develop a more rounded outlook of Artificial Intelligence? What current knowledge do you have to be able to evaluate such a claim?"
  },
  {
    question: "What kind of AI is this claim about?",
    description: "It may not be clear from the context of the claim such as a title of an article or an abstract of a paper. There is a big difference between generative AI (and tools based on Large Language Models) and other kinds of AI."
  },
  {
    question: "What period of time is the claim relevant to?",
    description: "Broadly, is it based on information from before the release of ChatGPT (30 Nov 2022) or after? For academic papers, publication date or even submission date is not a sufficient signal. You have to look at the methods sections. Even papers on 'AI' published in 2024 may be based on work done in early 2023."
  },
  {
    question: "Which model version?",
    description: "If the claim is about generative AI or Large Language Models it is essential to review what exact versions of models were used to base the claim on."
  },
  {
    question: "Context of the claim?",
    description: "It is not sufficient to evaluate the claim being made but also the context in which it is being made. Does the author or publication have an explicit or implicit objective of advocacy for a particular position? Does it fail the tests outlined in the Code of Conduct?"
  }
];

export const scenariosData: ScenarioItem[] = [
  {
    id: "s1",
    title: "Scenario 1: Casual claim citing a study",
    summary: "Evaluate a claim about ChatGPT's summarization skills based on a cited study.",
    content: `This claim appeared in a blog post widely circulated on social media. It links to another blog post citing a study.

> "As an Australian study recently showed, ChatGPT does not know how to summarize, only shorten. So far, summarizing remains something only humans do well." (November 2024)`,
    quiz: {
      question: "What is the primary flaw in this claim regarding the evidence used?",
      options: [
        "The claim is too short to be evaluated.",
        "It cites a blog post referring to a study on a different, older model (Llama 2), not ChatGPT.",
        "Summarizing is actually the only thing AI can do well.",
        "There is no flaw; the claim is accurate."
      ],
      correctOptionIndex: 1
    },
    answer: `**The claim points to a blog post, not a study.**

The study the blog post points to does not mention ChatGPT at all. It is a report done by Amazon Web Services for the Australian government done on an open source model Llama 2 run on AWS cloud. By the time the blog post was published, Llama 2 had been superseded by Llama 3 which has increased in capabilities.

Also, this is a claim that can be readily disproven, by asking ChatGPT to summarise the blog post in various forms.`
  },
  {
    id: "s2",
    title: "Scenario 2: Medical diagnosis reliability",
    summary: "Analyze a headline claiming AI chatbots fail at medical diagnosis.",
    content: `A report on a recently published study was posted in the New Scientist under the headline: "AI chatbots fail to diagnose patients by talking with them".

> "Advanced artificial intelligence models score well on professional medical exams but still flunk one of the most crucial physician tasks... While large language models show impressive results on multiple-choice tests, their accuracy drops significantly in dynamic conversations," says Pranav Rajpurkar at Harvard University.`,
    quiz: {
      question: "Why is the headline 'AI chatbots fail to diagnose' potentially misleading in this specific context?",
      options: [
        "Medical diagnosis is illegal for AI to perform.",
        "The study was submitted 18 months prior to the news report and tested significantly older models.",
        "The quote is from a student, not a professor.",
        "Chatbots are not 'Advanced artificial intelligence'."
      ],
      correctOptionIndex: 1
    },
    answer: `This news item was published on 2 January 2025 and it links to the original paper. The original paper was published online on 2 January 2025, but it is a paper that had been **submitted on 8 August 2023** and accepted on 1 October 2024. This automatically means that all of its claims are 18 months out of date.

The report is actively misleading its readers by saying in 2025 that the experiments showed something about "leading language models" today. The models tested (Llama-2-7b, Mistral-v2-7b, GPT-3.5) were either not the leading models at the time or are now significantly outdated compared to current frontiers like GPT-4o or Claude 3.5.`
  },
  {
    id: "s3",
    title: "Scenario 3: Systematic reviews in medical education",
    summary: "Assess the relevance of systematic reviews in the fast-moving field of AI.",
    content: `Here are two systematic reviews of the use of AI in medical education published in 2024.

**Review 1 (Lucas et al., 2024):**
> "42.5% of these studies specifically evaluated LLMs in a novel way... The remaining studies broadly discussed the prospective role of LLMs..."

**Review 2 (Tozsin et al., 2024):**
> "Articles written in the English language between 2000 and March 2023 were reviewed retrospectively..."`,
    quiz: {
      question: "Why are these 2024 systematic reviews of limited use for evaluating current GenAI capabilities?",
      options: [
        "Systematic reviews are never useful for scientific topics.",
        "They utilize qualitative data only.",
        "The data collection periods ended before modern LLMs (like GPT-4) were widely deployed or studied.",
        "They focus on image generation, not text."
      ],
      correctOptionIndex: 2
    },
    answer: `In a quickly developing area, systematic reviews are often less useful due to lag.

**Review 1:** Published in 2024 but received in August 2023. Its findings are almost entirely unrepresentative of technology today. Table data shows many studies didn't report the exact model, or used non-LLM models (e.g., BERT).

**Review 2:** Cites articles between 2000 and March 2023. This means it has almost no bearing on what "AI" means in medical education today, as it barely covers the ChatGPT era.

**Conclusion:** Study 1 is of marginal utility (outdated models). Study 2 is of no relevance (doesn't cover LLMs effectively).`
  },
  {
    id: "s4",
    title: "Scenario 4: Headline research on AI and poverty",
    summary: "Determine if policy reports on 'AI decision making' apply to Generative AI.",
    content: `A 2024 report on AI use in the US states:
> "essentially all 92 million low-income people in the U.S... have some basic aspect of their lives decided by AI."

The report defines its scope as "decisions about healthcare coverage, food assistance program eligibility, employment, housing..."`,
    quiz: {
      question: "Does this claim about '92 million low-income people' apply to Generative AI usage (like ChatGPT)?",
      options: [
        "Yes, 'AI' covers all algorithms equally.",
        "No, the report explicitly excludes Generative AI and LLMs to focus on bureaucratic decision algorithms.",
        "Yes, because low-income people use ChatGPT for healthcare.",
        "Only in California and New York."
      ],
      correctOptionIndex: 1
    },
    answer: `This claim has **no relevance** to the use of ChatGPT or Claude.

The report explicitly excludes them in their definition: *"This focus on decisional AI excludes some hot topics in AI, such as large language models and generative AI."*

This is a common problem with reporting. The current high profile of AI is motivated by generative AI (post-2022), yet this distinction is rarely made in headlines. The report focuses on older, decisional algorithms used in bureaucracy, not generative AI tools used in education or care.`
  },
  {
    id: "s5",
    title: "Scenario 5: Claims about AI energy use",
    summary: "Contextualize viral claims about the energy consumption of AI image generation.",
    content: `A report headline: *"Making an image with generative AI uses as much energy as charging your phone"* (MIT Technology Review).

> "Generating 1,000 images with a powerful AI model... is responsible for roughly as much carbon dioxide as driving the equivalent of 4.1 miles in an average gasoline-powered car."`,
    quiz: {
      question: "What critical context is often missing from this energy use claim when discussed in general AI terms?",
      options: [
        "Smartphones barely use any energy.",
        "AI runs on nuclear power.",
        "It compares image generation (computationally expensive) to phone charging, while text generation is up to 1,000x more efficient.",
        "The car comparison is calculated using diesel fuel."
      ],
      correctOptionIndex: 2
    },
    answer: `This claim (Dec 2023) was later updated by the authors to moderate the claim to *half* a phone charge for the least efficient model.

The paper cited the *least efficient* model. New models (like Flux or newer Stable Diffusion versions) are significantly more efficient.

**Context matters:**
1.  Charging a smartphone is not very energy intensive (equivalent to microwaving food for 30 seconds).
2.  The headline comparison uses image generation to stand for *all* AI, whereas text generation (the most common use) is up to **1,000 times more energy efficient**.
3.  Headlines often aim to evoke a specific emotional response rather than contextualize the actual energy cost against comparable daily activities.`
  }
];