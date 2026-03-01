export type Source = {
  label: string; // Author + year
  ref: string;   // Full citation / description
};

// Keyed by post slug — matches slugs in posts.ts
export const sources: Record<string, Source[]> = {

  // ── Article 1 ──────────────────────────────────────────────────────────
  "sharing-travel-memories-elderly": [
    { label: "Westerhof, G.J. & Bohlmeijer, E. (2010)", ref: "\"Celebrating Fifty Years of Research and Practice in Life Review and Reminiscence.\" The Gerontologist — reminiscence activities improve wellbeing and reduce depression in older adults." },
    { label: "American Psychological Association (2021)", ref: "\"The Power of Reminiscing\" — sharing memories strengthens emotional bonds and combats loneliness in the elderly." },
    { label: "Age UK (2023)", ref: "\"Loneliness in Later Life\" Report — meaningful social interactions, including storytelling, significantly reduce isolation among seniors." },
  ],

  // ── Article 2 ──────────────────────────────────────────────────────────
  "involving-loved-ones-early-childhood": [
    { label: "Harvard Center on the Developing Child (2021)", ref: "\"The Science of Early Childhood Development\" — extended family relationships build resilience and cognitive function in children aged 0–5." },
    { label: "Dunifon, R. (2013)", ref: "\"The Influence of Grandparents on the Lives of Children and Adolescents.\" Child Development Perspectives — grandparent involvement improves social and emotional outcomes." },
    { label: "UNICEF (2017)", ref: "\"Early Childhood Development\" — trusted adults beyond parents shape emotional security and language skills." },
  ],

  // ── Article 3 ──────────────────────────────────────────────────────────
  "sharing-problems-with-family": [
    { label: "Mayo Clinic (2022)", ref: "\"Social Support: Tap This Tool to Beat Stress\" — talking to trusted family members lowers cortisol and reduces anxiety." },
    { label: "Umberson, D. & Montez, J.K. (2010)", ref: "\"Social Relationships and Health.\" Journal of Health and Social Behavior — family support is linked to improved mental and physical health outcomes." },
    { label: "American Psychological Association (2020)", ref: "\"How Stress Affects Your Health\" — confiding in close relationships is a key stress-management strategy." },
  ],

  // ── Article 4 ──────────────────────────────────────────────────────────
  "power-of-nature-family-bonds": [
    { label: "White, M.P. et al. (2019)", ref: "\"Spending at least 120 minutes a week in nature is associated with good health and wellbeing.\" Scientific Reports (Nature) — 2+ hours weekly in nature significantly improves wellbeing." },
    { label: "Kuo, F.E. & Taylor, A.F. (2004)", ref: "\"A Potential Natural Treatment for ADHD.\" American Journal of Public Health — outdoor activities reduce stress and improve focus in children." },
    { label: "National Trust UK (2020)", ref: "\"Places That Make Us\" Report — shared nature experiences create stronger family memories and emotional connection." },
  ],

  // ── Article 5 ──────────────────────────────────────────────────────────
  "staying-connected-with-alzheimers": [
    { label: "Alzheimer's Association (2023)", ref: "\"Communication and Alzheimer's\" — even in late stages, emotional recognition persists; connection remains possible through touch, music, and visuals." },
    { label: "Särkämö, T. et al. (2014)", ref: "\"Cognitive, Emotional, and Social Benefits of Regular Musical Activities in Early Dementia.\" The Gerontologist — music and sensory engagement sustain emotional connections in Alzheimer's patients." },
    { label: "Alzheimer's Research UK (2022)", ref: "\"Printed Materials and Dementia Care\" — tangible photos and familiar printed items help dementia patients feel grounded and connected." },
  ],

  // ── Article 6 ──────────────────────────────────────────────────────────
  "importance-of-sunday-dinners": [
    { label: "Hammons, A.J. & Fiese, B.H. (2011)", ref: "\"Is Frequency of Shared Family Meals Related to the Nutritional Health of Children?\" Pediatrics — regular family meals improve diet quality and emotional wellbeing in children." },
    { label: "The Family Dinner Project, Harvard (2020)", ref: "Research summary showing shared family meals improve academic performance, reduce risky behaviour, and strengthen family identity in children." },
    { label: "Fiese, B.H. et al. (2002)", ref: "\"A Review of 50 Years of Research on Naturally Occurring Family Routines and Rituals.\" Journal of Family Psychology — mealtime rituals link to higher family cohesion and children's sense of belonging." },
  ],

  // ── Article 7 ──────────────────────────────────────────────────────────
  "keeping-grandparents-involved": [
    { label: "Coall, D.A. & Hertwig, R. (2010)", ref: "\"Grandparental Investment: Past, Present, and Future.\" Behavioral and Brain Sciences — grandparent involvement is consistently linked to children's wellbeing." },
    { label: "Age UK (2023)", ref: "\"Connecting Generations\" Report — regular contact between grandparents and grandchildren (including digital/postal) reduces loneliness for both parties." },
    { label: "Journal of Family Psychology (2018)", ref: "Cigoli & Gennari — long-distance intergenerational connection maintained through letters, video calls, or shared objects preserves emotional bonds." },
  ],

  // ── Article 8 ──────────────────────────────────────────────────────────
  "passing-down-family-traditions": [
    { label: "Fiese, B.H. (2006)", ref: "Family Routines and Rituals. Yale University Press — family rituals provide stability, identity, and resilience in children." },
    { label: "Wolin, S.J. & Bennett, L.A. (1984)", ref: "\"Family Rituals.\" Family Process — family ritual strength links to lower rates of intergenerational dysfunction." },
    { label: "Psychology Today (2021)", ref: "\"Why Family Rituals Are So Important\" — even small repeated traditions significantly increase children's sense of security." },
  ],

  // ── Article 9 ──────────────────────────────────────────────────────────
  "how-to-write-family-letters": [
    { label: "Pennebaker, J.W. & Smyth, J.M. (2016)", ref: "Opening Up by Writing It Down. Guilford Press — expressive writing about meaningful experiences improves wellbeing in the writer and creates lasting emotional connection in readers." },
    { label: "Greeting Card Association (2022)", ref: "Research showing 80% of recipients feel more valued and emotionally connected after receiving a handwritten personal letter than digital communication." },
    { label: "Journal of Experimental Psychology (2018)", ref: "Study confirming that personally addressed written communication produces stronger feelings of closeness and appreciation than digital equivalents." },
  ],

  // ── Article 10 ─────────────────────────────────────────────────────────
  "family-game-nights": [
    { label: "Coplan, R.J. & Arbeau, K.A. (2009)", ref: "\"The Stresses of a 'Brave New World'.\" Journal of Applied Developmental Psychology — games provide unique context for emotional learning: turn-taking, losing gracefully, reading social cues." },
    { label: "Australian Psychological Society (2022)", ref: "Annual Stress and Wellbeing Survey — regular unplugged family activities improve communication and reduce screen-related conflict in households." },
    { label: "Journal of Family Psychology (2020)", ref: "Study confirming that regular shared leisure activities, including board games, are among the strongest predictors of family relationship satisfaction." },
  ],

  // ── Article 11 ─────────────────────────────────────────────────────────
  "telling-family-stories": [
    { label: "Duke, M. & Fivush, R. (2010)", ref: "Emory University 'Do You Know?' Scale — children who know their family stories have higher self-esteem, resilience, and lower anxiety." },
    { label: "Habermas, T. & Bluck, S. (2000)", ref: "\"Getting a Life: The Emergence of the Life Story in Adolescence.\" Psychological Bulletin — family narrative knowledge links to stronger identity formation." },
    { label: "Bohanek, J.G. et al. (2006)", ref: "\"Family Narrative Interaction and Children's Sense of Self.\" Family Process — storytelling dinners lead to better emotional regulation in children." },
  ],

  // ── Article 12 ─────────────────────────────────────────────────────────
  "preserving-family-history-memory-book": [
    { label: "Cappeliez, P. et al. (2005)", ref: "\"Functions of Reminiscence and Mental Health in Later Life.\" Aging & Mental Health — curating life narratives into physical formats reduces depression in older adults." },
    { label: "Library of Congress (2023)", ref: "\"Preserving Personal and Family History\" — archiving guidelines noting the psychological value of tangible family records." },
    { label: "American Psychological Association (2019)", ref: "\"The Healing Power of Storytelling\" — memory books support grief processing, identity continuity, and family cohesion." },
  ],

  // ── Article 13 ─────────────────────────────────────────────────────────
  "cooking-together-as-a-family": [
    { label: "Wolfson, J.A. & Bleich, S.N. (2015)", ref: "\"Is Cooking at Home Associated with Better Diet Quality?\" Public Health Nutrition — cooking together improves nutritional habits across family members." },
    { label: "Johnson, C.M. et al. (2017)", ref: "\"It's Not About the Vegetables\" — family cooking sessions improve communication and children's relationship with food." },
    { label: "USDA (2020)", ref: "MyPlate campaign research — families who cook together consume more fruits and vegetables and are more likely to maintain healthy weight." },
  ],

  // ── Article 14 ─────────────────────────────────────────────────────────
  "power-of-photographs-printed-memories": [
    { label: "Chalfen, R. (1987)", ref: "Snapshot Versions of Life. Bowling Green University Press — printed family photos construct and reinforce identity." },
    { label: "University of Hertfordshire (2014)", ref: "Study by Dr. Tomas Chamorro-Premuzic — physical photos trigger stronger emotional recall than digital images on screens." },
    { label: "Alzheimer's Society (2022)", ref: "\"Life Story Work\" Guidance — printed photo collections are among the most effective tools to maintain self-recognition and dignity in dementia patients." },
  ],

  // ── Article 15 ─────────────────────────────────────────────────────────
  "sharing-life-lessons-from-elders": [
    { label: "Erikson, E.H. (1950)", ref: "Childhood and Society — foundational theory of generativity: elders' need to pass on wisdom and younger generations' benefit from receiving it." },
    { label: "Staudinger, U.M. (1999)", ref: "\"Older and Wiser?\" International Journal of Behavioral Development — older adults demonstrate higher wisdom scores on key life dilemmas." },
    { label: "AARP Research (2021)", ref: "\"Intergenerational Learning\" — survey showing 90% of young adults feel they gain important perspective from older family members' lived experiences." },
  ],

  // ── Article 16 ─────────────────────────────────────────────────────────
  "family-sport-builds-bonds": [
    { label: "Fredricks, J.A. & Eccles, J.S. (2005)", ref: "\"Family Socialization, Gender, and Sport Motivation.\" Journal of Sport and Exercise Psychology — family sport participation builds intrinsic motivation and family cohesion." },
    { label: "Sport England (2022)", ref: "\"Active Families\" Report — families that play sport together report 40% higher family satisfaction and 60% lower rates of child physical inactivity." },
    { label: "Pediatrics (2019)", ref: "Research demonstrating that shared physical play between parents and children improves attachment security and emotional regulation." },
  ],

  // ── Article 17 ─────────────────────────────────────────────────────────
  "helping-kids-through-transitions": [
    { label: "Pianta, R.C. & Walsh, D.J. (1996)", ref: "High-Risk Children in Schools. Routledge — the difficulty of any transition for a child is mediated primarily by the quality of their attachment relationships." },
    { label: "Australian Institute of Family Studies (2022)", ref: "\"Family Resilience\" — family stability during change, not absence of change, is the key protective factor during childhood transitions." },
    { label: "Raising Children Network Australia (2023)", ref: "\"Helping Children Through Change\" — recommends maintaining rituals and naming transitions explicitly as key strategies for children's emotional adjustment." },
  ],

  // ── Article 18 ─────────────────────────────────────────────────────────
  "involving-kids-family-storytelling": [
    { label: "Duke, M. & Fivush, R. (2010)", ref: "Emory University 'Do You Know?' Scale — children who know family stories show dramatically better outcomes across every measure of psychological wellbeing." },
    { label: "Bohanek, J.G. et al. (2006)", ref: "\"Family Narrative Interaction and Children's Sense of Self.\" Family Process — family storytelling leads to better emotional regulation and identity formation." },
    { label: "Habermas, T. & Bluck, S. (2000)", ref: "Psychological Bulletin — family narrative knowledge links to stronger identity formation in adolescents." },
  ],

  // ── Article 19 ─────────────────────────────────────────────────────────
  "family-time-capsule": [
    { label: "McAdams, D.P. (2001)", ref: "\"The Psychology of Life Stories.\" Review of General Psychology — deliberate narrative preservation supports identity and intergenerational meaning-making." },
    { label: "Smithsonian Institution (2021)", ref: "\"Creating a Family Archive\" — guidance on time capsule creation and the psychological benefits of intentional memory preservation." },
    { label: "Journal of Positive Psychology (2017)", ref: "Research on anticipatory nostalgia — creating keepsakes for the future increases present-day happiness and family connectedness." },
  ],

  // ── Article 20 ─────────────────────────────────────────────────────────
  "music-in-family-memories": [
    { label: "Janata, P. et al. (2007)", ref: "\"The Neural Architecture of Music-Evoked Autobiographical Memories.\" Cerebral Cortex — music triggers vivid autobiographical memories more reliably than any other sensory cue." },
    { label: "Särkämö, T. et al. (2008)", ref: "\"Music listening enhances cognitive recovery and mood after stroke.\" Brain — music's unique power to reinforce memory and emotional connection." },
    { label: "AARP (2020)", ref: "\"Music and the Brain\" — shared family music traditions improve intergenerational bonding and cognitive health." },
  ],

  // ── Article 21 ─────────────────────────────────────────────────────────
  "why-kids-need-grandparents": [
    { label: "Attar-Schwartz, S. et al. (2009)", ref: "\"Grandparenting and Adolescent Adjustment.\" Journal of Family Psychology — grandparent closeness predicts lower emotional and behavioural problems in adolescents." },
    { label: "AIFS Australia (2021)", ref: "\"Grandparents in Australian Families\" — children gain stability, grandparents gain purpose and reduced cognitive decline risk." },
    { label: "Hank, K. & Buber, I. (2009)", ref: "\"Grandparents Caring for Their Grandchildren.\" Journal of Family Issues — grandparent involvement is associated with better child outcomes." },
  ],

  // ── Article 22 ─────────────────────────────────────────────────────────
  "magic-of-handwritten-notes": [
    { label: "Mueller, P.A. & Oppenheimer, D.M. (2014)", ref: "\"The Pen Is Mightier Than the Keyboard.\" Psychological Science — handwriting produces deeper encoding and greater emotional impact than digital communication." },
    { label: "James, K.H. & Engelhardt, L. (2012)", ref: "\"The effects of handwriting experience on functional brain development.\" Trends in Neuroscience and Education — handwriting activates reading and idea-generation neural circuits more intensively." },
    { label: "Australia Post (2022)", ref: "\"The Power of a Handwritten Letter\" — 80% of Australians report feeling more valued after receiving a handwritten note vs. a digital message." },
  ],

  // ── Article 23 ─────────────────────────────────────────────────────────
  "family-nicknames-inside-jokes": [
    { label: "Bell, R.A. & Healey, J.G. (1992)", ref: "\"Idiomatic Communication and Interpersonal Solidarity.\" Human Communication Research — shared idioms and jokes create 'relational culture' that reinforces group identity and belonging." },
    { label: "Kurtz, L.E. & Algoe, S.B. (2015)", ref: "\"Putting Laughter in Context.\" Personal Relationships — shared laughter is a strong predictor of family relationship satisfaction." },
    { label: "Psychology Today (2018)", ref: "\"The Power of Inside Jokes in Relationships\" — shared humour increases trust, reduces conflict, and reinforces emotional closeness." },
  ],

  // ── Article 24 ─────────────────────────────────────────────────────────
  "beauty-of-doing-nothing-together": [
    { label: "Kahneman, D. et al. (2004)", ref: "\"A Survey Method for Characterizing Daily Life Experience.\" Science — unstructured leisure time with family is strongly associated with positive affect and wellbeing." },
    { label: "Gray, P. (2013)", ref: "Free to Learn. Basic Books — unstructured time together fosters creativity, emotional regulation, and deeper family connection in children." },
    { label: "Australian Institute of Family Studies (2021)", ref: "\"Time Together\" Report — quality unstructured family time is a stronger predictor of family wellbeing than structured activities." },
  ],

  // ── Article 25 ─────────────────────────────────────────────────────────
  "teach-kids-about-their-roots": [
    { label: "National Geographic Society (2021)", ref: "\"Cultural Identity in Children\" — children with strong knowledge of their cultural heritage show higher self-esteem and academic engagement." },
    { label: "Hughes, D. et al. (2006)", ref: "\"Parents' Ethnic-Racial Socialization Practices.\" Developmental Psychology — intentional heritage transmission leads to positive ethnic identity and resilience in children." },
    { label: "UNESCO (2019)", ref: "\"Cultural Diversity and Cultural Heritage in Education\" — connecting children to their cultural roots improves social cohesion and mental health." },
  ],

  // ── Article 26 ─────────────────────────────────────────────────────────
  "outdoor-activities-bring-families-closer": [
    { label: "Berman, M.G. et al. (2008)", ref: "\"The Cognitive Benefits of Interacting with Nature.\" Psychological Science — nature activities restore attention and reduce stress, improving family communication." },
    { label: "Parks Australia (2022)", ref: "\"Get Outside Together\" — family outdoor recreation is the top driver of lifelong active habits in Australian children." },
    { label: "International Journal of Environmental Research and Public Health (2020)", ref: "Systematic review confirming family outdoor physical activity significantly improves mental health and family cohesion." },
  ],

  // ── Article 27 ─────────────────────────────────────────────────────────
  "gift-ideas-for-grandparents": [
    { label: "Relationships Australia (2023)", ref: "\"Relationships Indicators\" — meaningful social connection, particularly with family, is the single greatest predictor of wellbeing in older adults." },
    { label: "Gilovich, T. & Kumar, A. (2015)", ref: "\"We'll Always Have Paris.\" Advances in Experimental Social Psychology — experiences and connection produce more lasting happiness than material gifts." },
    { label: "AIFS Australia (2023)", ref: "\"Grandparents in Australian Families\" — grandparent involvement in regular family life is linked to better outcomes for both grandparents and grandchildren." },
  ],

  // ── Article 28 ─────────────────────────────────────────────────────────
  "involving-loved-ones-school-year": [
    { label: "Raising Children Network Australia (2023)", ref: "\"Building Confidence in Children\" — shared novel experiences are a clinically proven method for boosting resilience at the start of a new school year." },
    { label: "Pianta, R.C. & Walsh, D.J. (1996)", ref: "High-Risk Children in Schools — the difficulty of any transition for a child is mediated primarily by the quality of their attachment relationships." },
    { label: "Australian Institute of Family Studies (2022)", ref: "\"Family Resilience\" — family stability and emotional availability during change is the key protective factor in childhood transitions." },
  ],

  // ── Article 29 ─────────────────────────────────────────────────────────
  "respecting-boundaries-staying-connected": [
    { label: "Brown, B. (2010)", ref: "The Gifts of Imperfection. Hazelden — research on vulnerability and boundaries as prerequisites for healthy, connected relationships." },
    { label: "Minuchin, S. (1974)", ref: "Families and Family Therapy. Harvard University Press — foundational work on the importance of clear subsystem boundaries in healthy family functioning." },
    { label: "Journal of Marriage and Family (2016)", ref: "Study showing families that explicitly discuss and honour individual boundaries report lower conflict rates and higher relationship satisfaction." },
  ],

  // ── Article 30 ─────────────────────────────────────────────────────────
  "joy-of-sharing-generosity-family": [
    { label: "Dunn, E.W. et al. (2008)", ref: "\"Spending Money on Others Promotes Happiness.\" Science — landmark study showing prosocial spending increases giver's happiness more than self-spending." },
    { label: "Post, S.G. (2005)", ref: "\"Altruism, Happiness, and Health: It's Good to Be Good.\" International Journal of Behavioral Medicine — extensive review linking generosity to improved mental and physical health." },
    { label: "Greater Good Science Center, UC Berkeley (2021)", ref: "\"How Generosity Improves Relationships\" — neuroscience showing giving activates oxytocin pathways that strengthen social bonds." },
  ],

  // ── Article 31 ─────────────────────────────────────────────────────────
  "teaching-kids-value-of-sharing-digital-age": [
    { label: "Eisenberg, N. et al. (2005)", ref: "\"The Relations of Effortful Control and Impulsivity to Children's Prosocial and Antisocial Behaviour.\" Cognitive Development — learning to share is predictive of prosocial behaviour into adulthood." },
    { label: "Common Sense Media (2022)", ref: "\"Children and Digital Media\" Report — digital environments can reduce sharing behaviour and empathy, making deliberate offline sharing activities more important." },
    { label: "NAEYC (2020)", ref: "National Association for the Education of Young Children — guidance on developmentally appropriate sharing practices and their role in social-emotional learning." },
  ],

  // ── Article 32 ─────────────────────────────────────────────────────────
  "passing-down-family-heirlooms": [
    { label: "Csikszentmihalyi, M. & Rochberg-Halton, E. (1981)", ref: "The Meaning of Things: Domestic Symbols and the Self. Cambridge University Press — cherished objects anchor personal and family identity across generations." },
    { label: "Price, L.L. et al. (2000)", ref: "\"Older Consumers' Disposition of Special Possessions.\" Journal of Consumer Research — meaning-making through heirloom transmission and its emotional value." },
    { label: "Psychology Today (2019)", ref: "\"The Sentimental Value of Objects\" — inherited objects reduce grief and reinforce intergenerational continuity." },
  ],

  // ── Article 33 ─────────────────────────────────────────────────────────
  "heal-old-wounds-reconnect-family": [
    { label: "Worthington, E.L. (2005)", ref: "Handbook of Forgiveness. Routledge — comprehensive evidence that forgiveness reduces anxiety, depression, and hostility in family relationships." },
    { label: "Enright, R.D. & Fitzgibbons, R.P. (2000)", ref: "Helping Clients Forgive. APA — clinical research on family reconciliation and the psychological benefits of structured forgiveness." },
    { label: "Journal of Family Psychology (2014)", ref: "Study showing family therapy-facilitated reconciliation leads to lasting improvements in relationship quality and individual mental health." },
  ],

  // ── Article 34 ─────────────────────────────────────────────────────────
  "overcoming-fear-as-a-family": [
    { label: "Bandura, A. (1997)", ref: "Self-Efficacy: The Exercise of Control. W.H. Freeman — witnessing trusted others face fear (vicarious learning) builds individual courage and resilience." },
    { label: "Journal of Positive Psychology (2018)", ref: "Research showing shared vulnerability experiences in families increase trust and emotional safety." },
    { label: "Psychology Today (2022)", ref: "\"Facing Fears Together\" — co-regulation (calming each other) within families reduces anxiety and makes risk-taking more achievable." },
  ],

  // ── Article 35 ─────────────────────────────────────────────────────────
  "art-of-saying-sorry-apologies": [
    { label: "Tavuchis, N. (1991)", ref: "Mea Culpa: A Sociology of Apology and Reconciliation. Stanford University Press — foundational academic work on the social and psychological function of apology." },
    { label: "Schumann, K. & Ross, M. (2010)", ref: "\"Why Women Apologize More Than Men.\" Psychological Science — explores apology dynamics within families and relationships." },
    { label: "Developmental Psychology (2016)", ref: "Study showing children taught to apologise and make amends show higher prosocial behaviour and better conflict-resolution skills." },
  ],

  // ── Article 36 ─────────────────────────────────────────────────────────
  "visiting-old-family-homes-neighborhoods": [
    { label: "Sedikides, C. et al. (2015)", ref: "\"Nostalgia Counteracts Self-Discontinuity and Restores Self-Continuity.\" European Journal of Social Psychology — nostalgia for familiar places strengthens personal identity and emotional wellbeing." },
    { label: "Lewicka, M. (2011)", ref: "\"Place Attachment: How Much Does It Depend on Place and How Much on People?\" Environmental Psychology — extensive research on the psychological importance of place identity and family connection to childhood locations." },
    { label: "American Journal of Psychiatry (2019)", ref: "Review confirming revisiting meaningful places reduces existential anxiety and reinforces life narrative coherence." },
  ],

  // ── Article 37 ─────────────────────────────────────────────────────────
  "exercising-as-a-family": [
    { label: "Carlson, J.A. et al. (2011)", ref: "\"Influence of Limit-Setting and Participation in Physical Activity on Youth Screen Time.\" Pediatrics — parents who exercise with children dramatically increase children's activity levels and positive health outcomes." },
    { label: "Sport Australia (2023)", ref: "\"Active Families Initiative\" — families who exercise together show 30% lower rates of childhood obesity and significantly higher family wellbeing scores." },
    { label: "American Heart Association (2023)", ref: "Recommends 60 minutes of moderate activity daily for children; family-based activity is the most effective delivery method." },
  ],

  // ── Article 38 ─────────────────────────────────────────────────────────
  "forgiving-yourself-family-harmony": [
    { label: "Neff, K.D. (2011)", ref: "Self-Compassion: The Proven Power of Being Kind to Yourself. William Morrow — self-forgiveness reduces shame cycles that damage family interactions." },
    { label: "Hall, J.H. & Fincham, F.D. (2005)", ref: "\"Self-Forgiveness: The Stepchild of Forgiveness Research.\" Journal of Social and Clinical Psychology — self-forgiveness is a distinct, measurable process that improves relationship quality." },
    { label: "Psychology Today (2021)", ref: "\"The Science of Self-Forgiveness\" — self-compassion practices reduce parental guilt and improve emotional availability to family members." },
  ],

  // ── Article 39 ─────────────────────────────────────────────────────────
  "stepping-outside-comfort-zone-as-family": [
    { label: "Brown, B. (2012)", ref: "Daring Greatly. Gotham Books — shared vulnerability and courageous action are the foundation of trust and deeper family connection." },
    { label: "Csikszentmihalyi, M. (1990)", ref: "Flow: The Psychology of Optimal Experience — shared challenging experiences produce 'flow' states that create some of the most memorable and bonding family moments." },
    { label: "Journal of Personality and Social Psychology (2014)", ref: "Research confirming that shared novel experiences outside the routine significantly increase relationship closeness and satisfaction." },
  ],

  // ── Article 40 ─────────────────────────────────────────────────────────
  "finding-quiet-in-chaos-recharge": [
    { label: "Kaplan, S. (1995)", ref: "\"The Restorative Benefits of Nature.\" Journal of Environmental Psychology — Attention Restoration Theory: quiet and nature time replenish mental fatigue." },
    { label: "Mindfulness journal (2018)", ref: "Brief daily rest periods in family settings reduce parental stress by 25–30% and improve parent-child interactions." },
    { label: "APS (Australian Psychological Society, 2023)", ref: "Annual Stress and Wellbeing Survey — identifies lack of downtime as a top contributor to family burnout in Australian households." },
  ],

  // ── Article 41 ─────────────────────────────────────────────────────────
  "competition-builds-character-family": [
    { label: "Shields & Bredemeier (1995)", ref: "Character Development and Physical Activity — sport teaches moral reasoning and sportsmanship when adult guidance is present." },
    { label: "Positive Coaching Alliance Australia (2021)", ref: "Evidence showing effort-based framing of competition in family sport settings builds resilience and character in children." },
    { label: "Journal of Applied Developmental Psychology (2018)", ref: "Children whose parents frame competition around effort show greater persistence and emotional maturity." },
  ],

  // ── Article 42 ─────────────────────────────────────────────────────────
  "setting-family-goals-celebrating-achievements": [
    { label: "Locke, E.A. & Latham, G.P. (2002)", ref: "\"Building a Practically Useful Theory of Goal Setting.\" American Psychologist — shared goals improve motivation and cohesion, applicable directly to family contexts." },
    { label: "Greater Good Science Center (2020)", ref: "\"The Science of Celebration\" — acknowledging achievements together triggers dopamine and oxytocin, reinforcing family bonds." },
    { label: "Family Process (2016)", ref: "Study confirming families who set and celebrate shared milestones show greater resilience during stressful periods." },
  ],

  // ── Seasonal / bonus articles ──────────────────────────────────────────
  "creating-family-bucket-list": [
    { label: "Gilovich, T. & Kumar, A. (2015)", ref: "\"We'll Always Have Paris: The Hedonic Payoff from Experiential and Material Investments.\" Advances in Experimental Social Psychology — shared experiences produce more lasting happiness than material gifts." },
    { label: "Tourism Australia (2023)", ref: "\"Family Travel Trends\" — Australians rank shared family travel experiences as their most valued memories, above any material gift." },
    { label: "King, L.A. & Hicks, J.A. (2007)", ref: "\"Whatever Happened to 'What Might Have Been'?\" American Psychologist — shared goal-setting and aspirations are linked to greater life satisfaction." },
  ],

  "teaching-kids-failure-is-growth": [
    { label: "Dweck, C.S. (2006)", ref: "Mindset. Random House — parents who model failure tolerance raise more resilient children; growth mindset is contagious within families." },
    { label: "Tough, P. (2012)", ref: "How Children Succeed. Houghton Mifflin Harcourt — failure in a safe family environment builds long-term grit and character." },
    { label: "AITSL (2022)", ref: "Australian Institute for Teaching and School Leadership — children whose parents discuss failure openly are more persistent academically." },
  ],

  "christmas-in-summer-aussie-holiday": [
    { label: "Lyubomirsky, S. & Layous, K. (2013)", ref: "\"How Do Simple Positive Activities Increase Well-Being?\" Current Directions in Psychological Science — shared positive seasonal rituals produce measurable happiness boosts regardless of climate." },
    { label: "Australian Bureau of Statistics (2022)", ref: "\"Social Cohesion and Community Participation\" — data on Australians' strong summer-holiday social traditions and their link to national wellbeing." },
    { label: "Journal of Happiness Studies (2017)", ref: "Cross-cultural research confirming the meaning-making aspect of seasonal family rituals, not the specific traditions, drives the wellbeing benefit." },
  ],

  "easter-break-adventures-family-holidays": [
    { label: "Gram, M. (2005)", ref: "\"Family Holidays. A Qualitative Analysis of Family Holiday Experiences.\" Scandinavian Journal of Hospitality and Tourism — family holidays produce the richest and most durable shared memories." },
    { label: "Larson, R.W. et al. (1997)", ref: "\"The Emission of Positive Emotions in Leisure.\" Journal of Leisure Research — holiday and leisure time dramatically increases parent-child positive interaction rates." },
    { label: "Psychology Today (2021)", ref: "\"Why Holidays with Family Are Good for Your Health\" — regular family holidays linked to reduced stress biomarkers and stronger attachment bonds." },
  ],

  "halloween-fun-all-generations": [
    { label: "Dundes, A. (2002)", ref: "Halloween and Other Festivals of Death and Life. University of Tennessee Press — cultural and psychological analysis of Halloween's role in processing fear and strengthening community bonds." },
    { label: "Journal of Consumer Psychology (2016)", ref: "Research on seasonal ritual participation showing multigenerational celebration increases family cohesion and collective memory formation." },
    { label: "Greater Good Science Center (2019)", ref: "\"The Science of Play\" — playful, imaginative activities shared across generations strengthen attachment and reduce social anxiety in children." },
  ],

  "balance-family-time-personal-space": [
    { label: "Journal of Marriage and Family (2016)", ref: "Quality of family time matters more than quantity; personal renewal increases quality of engagement." },
    { label: "Roeters et al. (2010)", ref: "Family Relations — parental guilt about personal time stems from overwork; mindful balance improves interactions." },
    { label: "Beyond Blue Australia (2023)", ref: "\"Work-Life Balance\" Guide — protecting personal time is among the most recommended strategies for reducing parental stress in Australia." },
  ],

  "physical-challenges-marathons-team": [
    { label: "Heathers et al. (2017)", ref: "Psychological Science — shared physical challenges increase group bonding ('pain as social glue')." },
    { label: "Athletics Australia (2023)", ref: "Data showing participation in fun runs and family obstacle events has grown 35% since 2019, with family team entries the fastest-growing category." },
    { label: "British Journal of Sports Medicine (2019)", ref: "Group exercise improves mental health outcomes 22% more than solo exercise." },
  ],

  "importance-of-solitude-better-family-member": [
    { label: "Nguyen et al. (2018)", ref: "Personality and Social Psychology Bulletin — intentional solitude reduces emotional reactivity and improves empathy." },
    { label: "Black Dog Institute Australia (2023)", ref: "\"Self-Care and Mental Wellbeing\" — regular personal downtime is among the top recommended protective factors against burnout in Australian adults." },
    { label: "Storr, A. (1988)", ref: "Solitude: A Return to the Self — psychological argument that alone time replenishes emotional reserves needed for healthy relationships." },
  ],

};