
export interface Article {
  id: string;
  title: string;
  slug: string;
  content: string;
  excerpt: string;
  featuredImage: string;
  createdAt: string;
  author: string;
  category: string;
  tags: string[];
}

export const articles: Article[] = [
  {
    id: "1",
    title: "The Future of Traditional Medicine in Modern Healthcare",
    slug: "future-traditional-medicine-modern-healthcare",
    content: `
# The Future of Traditional Medicine in Modern Healthcare

Traditional medicine systems like Tibetan medicine (Sowa Rigpa) are increasingly finding their place in modern healthcare landscapes. As we advance into an era of personalized medicine, the holistic approaches of traditional systems offer valuable insights.

## Integration with Modern Practices

The integration of traditional and modern medicine is not about replacing one with the other, but rather creating a comprehensive healthcare approach that addresses both physical and mental well-being.

### Key Benefits of Integration:

- **Holistic Patient Care**: Traditional medicine considers the whole person, not just symptoms
- **Preventive Approach**: Focus on maintaining health rather than just treating disease
- **Natural Remedies**: Reduced side effects compared to synthetic medications
- **Cultural Preservation**: Maintaining ancient wisdom and practices

## Research and Validation

Modern scientific methods are being used to validate traditional treatments, creating evidence-based approaches that combine the best of both worlds.

The World Health Organization has recognized the importance of traditional medicine and is working to integrate it into national healthcare systems worldwide.

## Looking Forward

As we move forward, the collaboration between traditional healers and modern healthcare practitioners will be crucial in developing comprehensive treatment approaches that honor both scientific rigor and ancient wisdom.
    `,
    excerpt: "Exploring how traditional medicine systems like Tibetan medicine are finding their place in modern healthcare and the benefits of integration.",
    featuredImage: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=800&h=400&fit=crop",
    createdAt: "2024-06-15",
    author: "Dr. Tashi Pedon",
    category: "Healthcare",
    tags: ["Traditional Medicine", "Healthcare Integration", "Tibetan Medicine"]
  },
  {
    id: "2",
    title: "Understanding the Three Humors in Tibetan Medicine",
    slug: "understanding-three-humors-tibetan-medicine",
    content: `
# Understanding the Three Humors in Tibetan Medicine

The foundation of Tibetan medicine rests on the concept of three humors or energies known as Wind (rLung), Bile (mKhris-pa), and Phlegm (Bad-kan). These fundamental principles guide diagnosis and treatment in the Sowa Rigpa system.

## The Three Humors Explained

### Wind (rLung)
Wind governs movement in the body, including circulation, breathing, and nervous system functions. When balanced, it ensures proper bodily functions and mental clarity.

**Characteristics of Wind imbalance:**
- Anxiety and restlessness
- Insomnia
- Digestive irregularities
- Joint pain

### Bile (mKhris-pa)
Bile controls digestion, metabolism, and body temperature. It's associated with the fire element and governs courage and intelligence.

**Signs of Bile imbalance:**
- Digestive problems
- Skin conditions
- Irritability
- Fever

### Phlegm (Bad-kan)
Phlegm provides structure and stability to the body. It's linked to the earth and water elements and governs physical strength and mental stability.

**Phlegm imbalance symptoms:**
- Sluggishness
- Weight gain
- Respiratory issues
- Depression

## Achieving Balance

Tibetan medicine aims to maintain harmony between these three humors through:
- Proper diet and lifestyle
- Herbal medications
- External therapies
- Spiritual practices

Understanding your constitutional type and current imbalances allows for personalized treatment approaches that address root causes rather than just symptoms.
    `,
    excerpt: "A comprehensive guide to the three humors in Tibetan medicine - Wind, Bile, and Phlegm - and their role in health and disease.",
    featuredImage: "https://images.unsplash.com/photo-1544991875-5dc1b05f607d?w=800&h=400&fit=crop",
    createdAt: "2024-06-10",
    author: "Dr. Tashi Pedon",
    category: "Education",
    tags: ["Three Humors", "Tibetan Medicine", "Health Education"]
  },
  {
    id: "3",
    title: "Seasonal Health Tips from Tibetan Medicine Perspective",
    slug: "seasonal-health-tips-tibetan-medicine",
    content: `
# Seasonal Health Tips from Tibetan Medicine Perspective

Tibetan medicine emphasizes the importance of living in harmony with natural cycles. Each season brings different challenges and opportunities for maintaining optimal health.

## Spring: The Season of Renewal

Spring is associated with the Phlegm humor. As nature awakens, our bodies also experience changes.

**Spring Health Tips:**
- Gradually increase physical activity
- Consume warming foods and spices
- Practice detoxification through gentle cleansing
- Maintain regular sleep schedules

**Recommended Foods:**
- Fresh greens and bitter vegetables
- Warming spices like ginger and turmeric
- Light, easily digestible meals

## Summer: The Fire Season

Summer relates to the Bile humor, bringing heat and intensity.

**Summer Wellness Practices:**
- Stay hydrated with cool (not cold) beverages
- Eat cooling foods like cucumber and mint
- Avoid excessive sun exposure
- Practice calming meditation

## Autumn: Transition and Preparation

Autumn is governed by Wind humor, representing movement and change.

**Autumn Health Focus:**
- Nourish with warming, grounding foods
- Establish routines to counter Wind imbalance
- Prepare mentally and physically for winter
- Practice oil massage for stability

## Winter: The Quiet Season

Winter emphasizes conservation of energy and staying warm.

**Winter Wellness:**
- Consume hearty, warming foods
- Maintain warmth through proper clothing
- Practice gentle indoor exercises
- Focus on rest and contemplation

## Year-Round Principles

Regardless of season, Tibetan medicine emphasizes:
- Eating according to your constitution
- Maintaining regular daily routines
- Balancing work and rest
- Connecting with nature

By aligning our lifestyle with seasonal rhythms, we can maintain better health and prevent many common ailments.
    `,
    excerpt: "Learn how to maintain optimal health throughout the year using seasonal wisdom from Tibetan medicine traditions.",
    featuredImage: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=400&fit=crop",
    createdAt: "2024-06-05",
    author: "Kunphen Medical Team",
    category: "Lifestyle",
    tags: ["Seasonal Health", "Lifestyle", "Prevention"]
  },
  {
    id: "4",
    title: "The Art of Pulse Diagnosis in Tibetan Medicine",
    slug: "art-pulse-diagnosis-tibetan-medicine",
    content: `
# The Art of Pulse Diagnosis in Tibetan Medicine

Pulse diagnosis is one of the most sophisticated diagnostic methods in Tibetan medicine. This ancient technique allows practitioners to assess the state of the three humors and overall health through careful examination of the pulse.

## The Fundamentals of Pulse Reading

In Tibetan medicine, pulse diagnosis involves feeling the pulse at three positions on each wrist, using three different levels of pressure.

### The Three Positions

**Left Hand:**
- Heart and Small Intestine (index finger)
- Liver and Gall Bladder (middle finger)
- Kidney and Reproductive organs (ring finger)

**Right Hand:**
- Lungs and Large Intestine (index finger)
- Spleen and Stomach (middle finger)
- Kidney and Urinary Bladder (ring finger)

## Types of Pulses

### Healthy Pulse Characteristics
- Steady and rhythmic
- Neither too fast nor too slow
- Present at all three levels
- Balanced strength

### Constitutional Pulse Types

**Wind Type Pulse:**
- Fast and light
- Sometimes irregular
- Feels like a balloon floating on water

**Bile Type Pulse:**
- Strong and rapid
- Forceful and prominent
- Feels like jumping

**Phlegm Type Pulse:**
- Slow and steady
- Deep and stable
- Feels heavy and sinking

## The Diagnostic Process

Pulse diagnosis is typically performed:
- Early in the morning
- On an empty stomach
- After the patient has been at rest
- Using three fingers simultaneously

The practitioner assesses:
- Rate and rhythm
- Depth and strength
- Quality and character
- Symmetry between sides

## Modern Applications

While traditional pulse diagnosis requires years of training, modern research is exploring:
- Digital pulse analysis
- Integration with modern monitoring
- Standardization of techniques
- Training programs for practitioners

The art of pulse diagnosis represents the deep connection between practitioner and patient, offering insights that go beyond what modern instruments can detect.
    `,
    excerpt: "Discover the ancient art of pulse diagnosis in Tibetan medicine and how practitioners use this technique to assess health and diagnose conditions.",
    featuredImage: "https://images.unsplash.com/photo-1559757175-0eb30cd8c063?w=800&h=400&fit=crop",
    createdAt: "2024-05-28",
    author: "Dr. Tashi Pedon",
    category: "Diagnosis",
    tags: ["Pulse Diagnosis", "Traditional Diagnosis", "Medical Techniques"]
  },
  {
    id: "5",
    title: "Herbal Medicine: Nature's Pharmacy in Tibetan Healing",
    slug: "herbal-medicine-natures-pharmacy-tibetan-healing",
    content: `
# Herbal Medicine: Nature's Pharmacy in Tibetan Healing

Tibetan herbal medicine represents one of the world's most sophisticated traditional pharmacological systems. With over 3,000 documented medicinal substances, this ancient practice harnesses the healing power of high-altitude plants.

## The Unique Himalayan Environment

The harsh, high-altitude environment of the Tibetan plateau produces plants with exceptional medicinal properties:

- **Intense UV radiation** increases active compounds
- **Extreme temperature variations** strengthen plant resilience
- **Pure air and water** ensure uncontaminated growth
- **Mineral-rich soil** enhances therapeutic properties

## Key Medicinal Plants

### Cordyceps (Yarsagumba)
Known as "Himalayan Gold," this fungus-caterpillar combination is prized for:
- Boosting energy and stamina
- Supporting respiratory health
- Enhancing immune function
- Improving kidney and lung function

### Snow Lotus (Saussurea)
This high-altitude flower offers:
- Anti-inflammatory properties
- Pain relief for joints and muscles
- Digestive support
- Circulatory enhancement

### Rhodiola (Golden Root)
An adaptogenic herb that helps:
- Combat stress and fatigue
- Improve mental clarity
- Support cardiovascular health
- Enhance physical performance

## Preparation Methods

### Traditional Processing
Tibetan medicine employs various preparation methods:

**Pills (Ril-bu):** Concentrated herbal formulas
**Powders (Phye-ma):** Ground herbs for easy absorption
**Decoctions (Thang):** Liquid extracts for immediate effect
**External applications:** Oils and poultices for topical use

### Quality Assurance
Traditional preparation follows strict guidelines:
- Seasonal harvesting at optimal potency
- Proper drying and storage techniques
- Ritual purification processes
- Careful combination of ingredients

## Formulation Principles

### Synergistic Combinations
Tibetan herbal formulas typically combine:
- **Primary herbs:** Address main symptoms
- **Supporting herbs:** Enhance effectiveness
- **Harmonizing herbs:** Prevent side effects
- **Catalyst herbs:** Improve absorption

### Constitutional Considerations
Formulas are customized based on:
- Individual constitution (Wind, Bile, Phlegm)
- Current imbalances
- Age and lifestyle factors
- Seasonal influences

## Modern Research and Validation

Contemporary studies are validating traditional uses:
- Standardization of active compounds
- Clinical trials for efficacy
- Safety profiles and interactions
- Quality control measures

## Sustainability and Conservation

As demand grows, protecting medicinal plants is crucial:
- Sustainable harvesting practices
- Cultivation programs
- Community involvement
- Environmental protection

The future of Tibetan herbal medicine lies in balancing traditional wisdom with modern scientific validation, ensuring both efficacy and sustainability.
    `,
    excerpt: "Explore the rich tradition of Tibetan herbal medicine, from high-altitude medicinal plants to traditional preparation methods and modern applications.",
    featuredImage: "https://images.unsplash.com/photo-1471919743851-c4df8b6ee133?w=800&h=400&fit=crop",
    createdAt: "2024-05-20",
    author: "Kunphen Medical Team",
    category: "Herbal Medicine",
    tags: ["Herbal Medicine", "Natural Healing", "Traditional Pharmacy"]
  }
];

export const getArticleBySlug = (slug: string): Article | undefined => {
  return articles.find(article => article.slug === slug);
};

export const getArticlesByCategory = (category: string): Article[] => {
  return articles.filter(article => article.category === category);
};

export const getRecentArticles = (limit: number = 3): Article[] => {
  return articles
    .sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime())
    .slice(0, limit);
};
