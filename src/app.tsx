import React, { useState } from 'react';
import { Copy, Download, RefreshCw, Terminal, Code2 } from 'lucide-react';

const ImagePromptGenerator = () => {
  const [activeTab, setActiveTab] = useState('shot');
  const [selections, setSelections] = useState({
    shot: '',
    camera: '',
    lens: '',
    lighting: [],
    style: [],
    mood: [],
    color: '',
    composition: '',
    subject: [],
    environment: '',
    quality: [],
    effects: [],
    ethnicity: [],
    faceShape: [],
    skinColor: [],
    skinType: [],
    jawlineType: [],
    age: [],
    products: [],
    fashion: [],
    hair: [],
    pose: [],
    filter: '',
    inspiredBy: [],
    eyeColor: [],
    weather: '',
    background: '',
    timeOfDay: ''
  });

  const categories = {
    // Row 1: People & Demographics
    subject: {
      title: 'Subject',
      multiSelect: true,
      options: [
        'male', 'female', 'portrait', 'landscape', 'cityscape', 'architecture', 'nature',
        'wildlife', 'street scene', 'still life', 'macro', 'abstract',
        'fashion model', 'athlete', 'musician', 'artist', 'child', 'elderly person',
        'businessman', 'doctor', 'teacher', 'chef', 'dancer', 'photographer'
      ]
    },
    age: {
      title: 'Age Range',
      multiSelect: true,
      options: [
        'newborn', 'infant', 'toddler', 'child', 'teenager', 'young adult',
        'adult', 'middle-aged', 'senior', 'elderly', '20s', '30s', '40s',
        '50s', '60s', '70s+', 'college age', 'working age', 'retirement age'
      ]
    },
    faceShape: {
      title: 'Face Shape',
      multiSelect: true,
      options: [
        'Oval', 'Round', 'Square', 'Heart-shaped', 'Diamond', 'Oblong',
        'Triangular', 'Rectangular', 'Pear-shaped', 'Angular', 'Soft',
        'Defined cheekbones', 'High cheekbones', 'Wide face', 'Narrow face'
      ]
    },
    skinColor: {
      title: 'Skin Color',
      multiSelect: true,
      options: [
        'Fair', 'Light', 'Medium', 'Olive', 'Tan', 'Brown', 'Dark', 'Deep',
        'Porcelain', 'Ivory', 'Beige', 'Golden', 'Bronze', 'Caramel',
        'Honey', 'Amber', 'Mahogany', 'Ebony', 'Warm undertones', 
        'Cool undertones', 'Neutral undertones', 'Rosy', 'Peachy'
      ]
    },
    skinType: {
      title: 'Skin Type',
      multiSelect: true,
      options: [
        'Smooth', 'Textured', 'Clear', 'Freckled', 'Moles', 'Beauty marks',
        'Dimples', 'Wrinkles', 'Fine lines', 'Acne scars', 'Pores visible',
        'Oily', 'Dry', 'Combination', 'Sensitive', 'Glowing', 'Matte',
        'Dewy', 'Sun-kissed', 'Tanned', 'Pale', 'Blemish-free'
      ]
    },
    jawlineType: {
      title: 'Jawline Type',
      multiSelect: true,
      options: [
        'Sharp jawline', 'Soft jawline', 'Strong jawline', 'Defined jawline',
        'Square jaw', 'Round jaw', 'Pointed chin', 'Cleft chin', 'Double chin',
        'Weak chin', 'Prominent chin', 'Angular jaw', 'Curved jaw',
        'Wide jaw', 'Narrow jaw', 'Masculine jawline', 'Feminine jawline'
      ]
    },
    ethnicity: {
      title: 'Ethnicity',
      multiSelect: true,
      options: [
        'Caucasian', 'African American', 'Hispanic', 'Latino', 'Asian',
        'Middle Eastern', 'Indian', 'Native American', 'Pacific Islander',
        'Mixed race', 'European', 'East Asian', 'Southeast Asian',
        'South Asian', 'African', 'Caribbean', 'Mediterranean'
      ]
    },
    hair: {
      title: 'Hair Style',
      multiSelect: true,
      options: [
        'long straight', 'long wavy', 'voluminous curls', 'braided long',
        'locs dreadlocks', 'mermaid hair', 'classic bob', 'lob',
        'shag cut', 'textured crop', 'pompadour', 'messy fringe',
        'pixie cut', 'buzz cut', 'undercut', 'mohawk faux hawk',
        'spiky', 'bowl cut', 'sleek bun', 'messy bun',
        'ponytail', 'space buns', 'french twist', 'victory rolls finger waves',
        'slicked back', 'afro', 'cornrows', 'bantu knots',
        'crimped', 'permed', 'wet look', 'greasy grungy',
        'anime style', 'natural color', 'platinum blonde', 'pastel colors',
        'vivid colors', 'rainbow', 'ombre balayage', 'split dye',
        'money piece highlights', 'two-tone', 'metallic iridescent'
      ]
    },
    // Row 2: Pose & Appearance
    pose: {
      title: 'Pose/Action',
      multiSelect: true,
      options: [
        'Standing', 'Sitting', 'Lying down', 'Walking', 'Running', 'Jumping',
        'Dancing', 'Laughing', 'Smiling', 'Serious expression', 'Looking away',
        'Looking at camera', 'Hands on hips', 'Crossed arms', 'Reaching out',
        'Pointing', 'Waving', 'Thinking pose', 'Action shot', 'Candid moment'
      ]
    },
    emotion: {
      title: 'Emotion',
      multiSelect: true,
      options: [
        'Joy', 'Sadness', 'Anger', 'Fear', 'Surprise', 'Disgust',
        'Contentment', 'Excitement', 'Anxiety', 'Calm', 'Confidence',
        'Vulnerability', 'Strength', 'Playfulness', 'Seriousness', 'Wonder',
        'Nostalgia', 'Hope', 'Despair', 'Love', 'Hate', 'Curiosity',
        'Boredom', 'Enthusiasm'
      ]
    },
    fashion: {
      title: 'Fashion Style',
      multiSelect: true,
      options: [
        'Casual', 'Formal', 'Business', 'Elegant', 'Bohemian', 'Minimalist',
        'Vintage', 'Retro', 'Punk', 'Gothic', 'Preppy', 'Streetwear',
        'Haute couture', 'Avant-garde', 'Classic', 'Trendy', 'Sporty',
        'Glamorous', 'Edgy', 'Romantic', 'Professional', 'Artistic'
      ]
    },
    products: {
      title: 'Products',
      multiSelect: true,
      options: [
        'Smartphone', 'Laptop', 'Watch', 'Jewelry', 'Perfume', 'Cosmetics',
        'Handbag', 'Shoes', 'Sunglasses', 'Car', 'Furniture', 'Clothing',
        'Electronics', 'Books', 'Food', 'Beverages', 'Headphones', 'Camera',
        'Bicycle', 'Sports equipment', 'Home decor', 'Plants', 'Art supplies'
      ]
    },
    texture: {
      title: 'Texture',
      multiSelect: true,
      options: [
        'Smooth', 'Rough', 'Glossy', 'Matte', 'Metallic', 'Fabric',
        'Leather', 'Wood grain', 'Stone', 'Marble', 'Concrete', 'Glass',
        'Velvet', 'Silk', 'Linen', 'Denim', 'Fur', 'Feathers',
        'Water surface', 'Sand', 'Rust', 'Weathered', 'Polished', 'Scratched'
      ]
    },
    // Row 3: Camera & Technical
    camera: {
      title: 'Camera Type',
      multiSelect: false,
      options: [
        'Fujifilm GFX100 II',
        'Hasselblad X2D 100C',
        'Hasselblad 500CM',
        'Sony A7R V',
        'Canon EOS R5',
        'Nikon Z9',
        'Leica M11',
        'Leica Q3',
        'Fujifilm X-T5',
        'Fujifilm X-S20',
        'Panasonic Lumix GH6',
        'Canon AE-1',
        'Contax T2',
        'Nikon D3',
        'Polaroid SX-70',
        'iPhone 14 Pro',
        'GoPro Hero'
      ]
    },
    lens: {
      title: 'Lens Type',
      multiSelect: false,
      options: [
        '"Nifty Fifty" Prime',
        'Fast Portrait Prime',
        'Helios 44-2 58mm f/2 (Swirly Bokeh)',
        'Meyer-Optik Trioplan 100mm f/2.8 (Soap Bubble Bokeh)',
        'Laowa 24mm f/14 Probe Lens',
        'Modern Macro Lens',
        'Tilt-Shift Lens',
        'Super Telephoto Prime',
        'Ultra-Wide Angle Lens',
        'Anamorphic Lens',
        'Standard Zoom Lens',
        '"Dreamy" Soft Focus Lens'
      ]
    },
    shot: {
      title: 'Shot Type',
      multiSelect: false,
      options: [
        'Extreme wide shot', 'Wide shot', 'Medium wide shot', 'Medium shot', 
        'Medium close-up', 'Close-up', 'Extreme close-up', 'Over-the-shoulder',
        'Bird\'s eye view', 'Worm\'s eye view', 'Dutch angle', 'Profile shot',
        'Three-quarter view', 'Full body shot', 'Headshot', 'Establishing shot'
      ]
    },
    composition: {
      title: 'Composition',
      multiSelect: false,
      options: [
        'Rule of thirds', 'Center composition', 'Leading lines', 'Symmetrical',
        'Asymmetrical', 'Diagonal composition', 'Spiral composition',
        'Frame within frame', 'Negative space', 'Pattern', 'Texture focus',
        'Foreground emphasis', 'Background blur', 'Layered composition'
      ]
    },
    quality: {
      title: 'Quality & Technical',
      multiSelect: true,
      options: [
        '8K resolution', '4K resolution', 'High detail', 'Sharp focus',
        'Soft focus', 'Grain', 'Noise', 'Clean image', 'HDR',
        'Long exposure', 'Motion blur', 'Freeze motion', 'Bokeh',
        'Chromatic aberration', 'Lens flare', 'Vignette'
      ]
    },
    // Row 4: Lighting & Environment
    lighting: {
      title: 'Lighting',
      multiSelect: true,
      options: [
        'Golden hour', 'Blue hour', 'Harsh sunlight', 'Soft diffused light',
        'Studio lighting', 'Natural light', 'Backlighting', 'Rim lighting',
        'Dramatic lighting', 'Moody lighting', 'Neon lighting', 'Candlelight',
        'Fluorescent lighting', 'Spotlight', 'Ambient lighting', 'High contrast'
      ]
    },
    weather: {
      title: 'Weather',
      multiSelect: false,
      options: [
        'Sunny', 'Cloudy', 'Overcast', 'Rainy', 'Stormy', 'Snowy',
        'Foggy', 'Misty', 'Windy', 'Humid', 'Dry', 'Clear sky',
        'Partly cloudy', 'Thunderstorm', 'Drizzle', 'Hail', 'Blizzard',
        'Dust storm', 'Rainbow', 'Sunset', 'Sunrise', 'Twilight',
        'Golden hour', 'Blue hour'
      ]
    },
    environment: {
      title: 'Environment',
      multiSelect: false,
      options: [
        'Urban', 'Rural', 'Indoor', 'Outdoor', 'Studio', 'Natural setting',
        'Industrial', 'Futuristic', 'Vintage interior', 'Minimalist space',
        'Crowded street', 'Empty room', 'Forest', 'Beach', 'Mountain', 'Desert',
        'Rooftop', 'Cafe', 'Gallery', 'Workshop', 'Office', 'Home',
        'Concert', 'Festival', 'Football stadium', 'Basketball arena'
      ]
    },
    background: {
      title: 'Background',
      multiSelect: false,
      options: [
        'Plain white', 'Plain black', 'Gradient', 'Textured', 'Blurred',
        'Bokeh', 'Natural landscape', 'Urban setting', 'Studio backdrop',
        'Seamless paper', 'Brick wall', 'Wooden panels', 'Concrete',
        'Abstract pattern', 'Geometric shapes', 'Solid color', 'Transparent',
        'Green screen', 'Sky', 'Water', 'Forest', 'Desert', 'Mountain',
        'Beach', 'City skyline'
      ]
    },
    effects: {
      title: 'Special Effects',
      multiSelect: true,
      options: [
        'Double exposure', 'Light trails', 'Star trails', 'Reflection',
        'Mirror effect', 'Prism effect', 'Lens flare', 'Sun rays',
        'Fog', 'Smoke', 'Rain', 'Snow', 'Fire', 'Sparks', 'Dust particles'
      ]
    },
    // Row 5: Style & Processing
    style: {
      title: 'Art Style',
      multiSelect: true,
      options: [
        'Photorealistic', 'Hyperrealistic', 'Cinematic', 'Documentary style',
        'Fashion photography', 'Street photography', 'Portrait photography',
        'Landscape photography', 'Abstract', 'Minimalist', 'Vintage',
        'Retro', 'Film noir', 'Cyberpunk', 'Steampunk', 'Surreal'
      ]
    },
    mood: {
      title: 'Mood & Atmosphere',
      multiSelect: true,
      options: [
        'Dramatic', 'Mysterious', 'Romantic', 'Melancholic', 'Energetic',
        'Peaceful', 'Tense', 'Dreamy', 'Gritty', 'Elegant', 'Raw',
        'Ethereal', 'Haunting', 'Vibrant', 'Serene', 'Dynamic'
      ]
    },
    color: {
      title: 'Color Palette',
      multiSelect: false,
      options: [
        'Vibrant colors', 'Muted colors', 'Monochromatic', 'Black and white',
        'Sepia tone', 'Warm tones', 'Cool tones', 'Complementary colors',
        'Analogous colors', 'High saturation', 'Desaturated', 'Pastel colors',
        'Neon colors', 'Earth tones', 'Jewel tones', 'Neutral palette'
      ]
    },
    filter: {
      title: 'Film Filter',
      multiSelect: false,
      options: [
        'Kodak Portra 400', 'Kodak Portra 800', 'Fuji Pro 400H', 'Kodak Ektar 100',
        'Ilford HP5 Plus', 'Kodak Tri-X 400', 'Fuji Velvia 50', 'Kodak Gold 200',
        'Agfa Vista 200', 'Lomography Color Negative 400', 'Cinestill 800T',
        'Kodak Vision3 250D', 'Fuji Superia 400', 'Rollei Retro 400S',
        'Kodak T-Max 400', 'Ilford Delta 3200', 'Polaroid SX-70', 'Instax Mini'
      ]
    },
    inspiredBy: {
      title: 'Inspired By',
      multiSelect: true,
      options: [
        'Ansel Adams\nLandscape', 'Henri Cartier-Bresson\nStreet', 'Annie Leibovitz\nPortrait', 'Richard Avedon\nFashion',
        'Vivian Maier\nStreet', 'Steve McCurry\nTravel', 'Helmut Newton\nFashion', 'Diane Arbus\nPortrait',
        'Irving Penn\nFashion/Portrait', 'Mario Testino\nFashion', 'Peter Lindbergh\nFashion', 'Sebastião Salgado\nDocumentary',
        'Bruce Weber\nFashion', 'Steven Meisel\nFashion', 'Tim Walker\nFashion', 'David Bailey\nPortrait',
        'Herb Ritts\nFashion/Portrait', 'Guy Bourdin\nFashion', 'Ellen von Unwerth\nFashion', 'Patrick Demarchelier\nFashion',
        'Platon\nPortrait', 'Gregory Crewdson\nFine Art', 'Cindy Sherman\nFine Art', 'Andreas Gursky\nArchitecture',
        'Joel Meyerowitz\nStreet', 'Robert Frank\nStreet', 'Dorothea Lange\nDocumentary', 'Edward Weston\nFine Art',
        'Frans Lanting\nWildlife', 'Nick Brandt\nWildlife', 'Jimmy Nelson\nDocumentary', 'Martin Parr\nDocumentary',
        'Joe McNally\nEditorial', 'David LaChapelle\nFashion', 'Paolo Roversi\nFashion', 'Sally Mann\nFine Art'
      ]
    }
  };

  const handleSelection = (category, value) => {
    const categoryConfig = categories[category];
    
    if (categoryConfig.multiSelect) {
      setSelections(prev => {
        const currentSelection = prev[category] || [];
        return {
          ...prev,
          [category]: currentSelection.includes(value) 
            ? currentSelection.filter(item => item !== value)
            : [...currentSelection, value]
        };
      });
    } else {
      setSelections(prev => ({
        ...prev,
        [category]: prev[category] === value ? '' : value
      }));
    }
  };

  const generatePrompt = () => {
    const activeSelections = Object.entries(selections)
      .filter(([_, value]) => {
        return Array.isArray(value) ? value.length > 0 : value !== '';
      })
      .reduce((acc, [key, value]) => {
        // Convert single-item arrays to strings and clean hair styles
        if (Array.isArray(value) && value.length === 1) {
          acc[key] = value[0];
        } else if (Array.isArray(value)) {
          acc[key] = value;
        } else {
          acc[key] = value;
        }
        return acc;
      }, {});

    // Build structured prompt with clear subject and technical separation
    let subjectParts = [];
    let technicalParts = [];
    
    // === SUBJECT SECTION ===
    // Start with shot type
    if (activeSelections.shot) {
      let shotText = activeSelections.shot;
      if (!shotText.toLowerCase().includes('shot')) {
        shotText += ' shot';
      }
      subjectParts.push(shotText);
    }
    
    // Add "of" connector and subject details
    if (activeSelections.subject || activeSelections.age || activeSelections.ethnicity) {
      subjectParts.push('of');
      
      // Build subject description
      const subjectDetails = [];
      
      if (activeSelections.age) {
        const ages = Array.isArray(activeSelections.age) ? activeSelections.age : [activeSelections.age];
        subjectDetails.push(ages.join(' '));
      }
      
      if (activeSelections.ethnicity) {
        const ethnicities = Array.isArray(activeSelections.ethnicity) ? activeSelections.ethnicity : [activeSelections.ethnicity];
        subjectDetails.push(ethnicities.join(' '));
      }
      
      if (activeSelections.subject) {
        const subjects = Array.isArray(activeSelections.subject) ? activeSelections.subject : [activeSelections.subject];
        subjectDetails.push(subjects.join(' and '));
      }
      
      subjectParts.push(subjectDetails.join(' '));
    }
    
    // Add pose/action
    if (activeSelections.pose) {
      const poses = Array.isArray(activeSelections.pose) ? activeSelections.pose : [activeSelections.pose];
      subjectParts.push(poses.join(' and ').toLowerCase());
    }
    
    // Add physical appearance details
    const appearanceDetails = [];
    
    if (activeSelections.hair && Array.isArray(activeSelections.hair) && activeSelections.hair.length > 0) {
      appearanceDetails.push(`with ${activeSelections.hair.join(' ').toLowerCase()} hair`);
    }
    
    if (activeSelections.faceShape && Array.isArray(activeSelections.faceShape) && activeSelections.faceShape.length > 0) {
      appearanceDetails.push(`${activeSelections.faceShape.join(', ').toLowerCase()} face shape`);
    }
    
    if (activeSelections.skinColor && Array.isArray(activeSelections.skinColor) && activeSelections.skinColor.length > 0) {
      appearanceDetails.push(`${activeSelections.skinColor.join(', ').toLowerCase()} skin tone`);
    }
    
    if (activeSelections.eyeColor && Array.isArray(activeSelections.eyeColor) && activeSelections.eyeColor.length > 0) {
      appearanceDetails.push(`${activeSelections.eyeColor.join(' and ').toLowerCase()} eyes`);
    }
    
    if (activeSelections.jawlineType && Array.isArray(activeSelections.jawlineType) && activeSelections.jawlineType.length > 0) {
      appearanceDetails.push(`${activeSelections.jawlineType.join(', ').toLowerCase()}`);
    }
    
    if (activeSelections.emotion && Array.isArray(activeSelections.emotion) && activeSelections.emotion.length > 0) {
      appearanceDetails.push(`expressing ${activeSelections.emotion.join(' and ').toLowerCase()}`);
    }
    
    if (activeSelections.fashion && Array.isArray(activeSelections.fashion) && activeSelections.fashion.length > 0) {
      appearanceDetails.push(`wearing ${activeSelections.fashion.join(' ').toLowerCase()} style clothing`);
    }
    
    if (appearanceDetails.length > 0) {
      subjectParts.push(appearanceDetails.join(', '));
    }
    
    // Add location/environment to subject
    if (activeSelections.environment) {
      subjectParts.push(`in a ${activeSelections.environment.toLowerCase()} setting`);
    } else if (activeSelections.background && !activeSelections.background.toLowerCase().includes('plain')) {
      subjectParts.push(`against ${activeSelections.background.toLowerCase()} background`);
    }
    
    if (activeSelections.weather) {
      subjectParts.push(`during ${activeSelections.weather.toLowerCase()} conditions`);
    }
    
    if (activeSelections.timeOfDay) {
      subjectParts.push(`at ${activeSelections.timeOfDay.toLowerCase()}`);
    }
    
    // === TECHNICAL SECTION ===
    // Camera and lens specifications (clearly separated as equipment used)
    if (activeSelections.camera || activeSelections.lens) {
      const cameraSpecs = [];
      if (activeSelections.camera) {
        cameraSpecs.push(`photographed with ${activeSelections.camera} camera`);
      }
      if (activeSelections.lens) {
        cameraSpecs.push(`${activeSelections.lens.toLowerCase()}`);
      }
      technicalParts.push(cameraSpecs.join(' and '));
    }
    
    // Lighting setup
    if (activeSelections.lighting && Array.isArray(activeSelections.lighting) && activeSelections.lighting.length > 0) {
      technicalParts.push(`${activeSelections.lighting.join(' and ').toLowerCase()} lighting setup`);
    }
    
    // Composition technique
    if (activeSelections.composition) {
      technicalParts.push(`${activeSelections.composition.toLowerCase()} composition`);
    }
    
    // Film/filter simulation
    if (activeSelections.filter) {
      technicalParts.push(`shot on ${activeSelections.filter} film stock`);
    }
    
    // Quality and technical effects
    const qualitySpecs = [];
    if (activeSelections.quality && Array.isArray(activeSelections.quality) && activeSelections.quality.length > 0) {
      qualitySpecs.push(...activeSelections.quality.map(q => q.toLowerCase()));
    }
    if (activeSelections.effects && Array.isArray(activeSelections.effects) && activeSelections.effects.length > 0) {
      qualitySpecs.push(...activeSelections.effects.map(e => e.toLowerCase()));
    }
    
    if (qualitySpecs.length > 0) {
      technicalParts.push(`${qualitySpecs.join(', ')} technical specs`);
    }
    
    // Style and artistic direction
    const styleParts = [];
    if (activeSelections.style && Array.isArray(activeSelections.style) && activeSelections.style.length > 0) {
      styleParts.push(`${activeSelections.style.join(' ').toLowerCase()} photography style`);
    }
    if (activeSelections.mood && Array.isArray(activeSelections.mood) && activeSelections.mood.length > 0) {
      styleParts.push(`${activeSelections.mood.join(' and ').toLowerCase()} atmosphere`);
    }
    
    if (styleParts.length > 0) {
      technicalParts.push(styleParts.join(' with '));
    }
    
    // Color treatment
    if (activeSelections.color) {
      technicalParts.push(`${activeSelections.color.toLowerCase()} color grading`);
    }
    
    // Artistic inspiration
    if (activeSelections.inspiredBy && Array.isArray(activeSelections.inspiredBy) && activeSelections.inspiredBy.length > 0) {
      const photographers = activeSelections.inspiredBy.map(item => item.split('\n')[0]);
      technicalParts.push(`in the style of ${photographers.join(' and ')}`);
    }
    
    // Combine subject and technical parts
    let prompt = subjectParts.join(' ');
    
    if (technicalParts.length > 0) {
      prompt += `. Technical: ${technicalParts.join(', ')}`;
    }
    
    // Clean up the prompt
    prompt = prompt.replace(/\s+/g, ' ').trim();
    
    // Capitalize first letter
    if (prompt) {
      prompt = prompt.charAt(0).toUpperCase() + prompt.slice(1);
    }
    
    return {
      prompt: prompt || 'No selections made...',
      parameters: activeSelections
    };
  };

  const copyToClipboard = () => {
    const prompt = generatePrompt();
    navigator.clipboard.writeText(JSON.stringify(prompt, null, 2));
  };

  const downloadPrompt = () => {
    const prompt = generatePrompt();
    const blob = new Blob([JSON.stringify(prompt, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'image-prompt.json';
    a.click();
    URL.revokeObjectURL(url);
  };

  const clearAll = () => {
    setSelections({
      shot: '', camera: '', lens: '', lighting: [], style: [], mood: [],
      color: '', composition: '', subject: [], environment: '', quality: [], effects: [],
      ethnicity: [], faceShape: [], skinColor: [], skinType: [], jawlineType: [],
      age: [], eyeColor: [], fashion: [], hair: [], pose: [], filter: '', 
      inspiredBy: [], emotion: [], weather: '', background: ''
    });
  };

  const tabs = Object.keys(categories);

  return (
    <div className="min-h-screen bg-black text-green-400" style={{ fontFamily: 'Fira Code, Monaco, Consolas, monospace' }}>
      {/* Header */}
      <div className="bg-gray-900 border-b border-gray-700 p-4">
        <div className="flex items-center gap-3">
          <Terminal className="text-green-400" size={24} />
          <h1 className="text-xl font-bold text-green-400">~/ai-prompt-generator</h1>
          <Code2 className="text-green-400" size={20} />
        </div>
        <p className="text-green-300 text-sm mt-1 opacity-80">Generate AI image prompts with JSON output</p>
      </div>

      <div className="flex h-screen">
        {/* Left Side - Categories and Subcategories */}
        <div className="w-2/3 bg-gray-900 border-r border-gray-700 flex flex-col">
          {/* Categories Grid */}
          <div className="p-4 border-b border-gray-700">
            <h2 className="text-green-400 font-bold text-sm uppercase tracking-wide mb-4">Categories</h2>
            <div className="grid grid-cols-5 gap-2">
              {tabs.map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`p-3 rounded text-xs font-medium transition-colors ${
                    activeTab === tab
                      ? 'bg-green-900 text-green-300 border border-green-400'
                      : 'bg-gray-800 text-gray-400 hover:text-green-300 hover:bg-gray-700 border border-gray-600'
                  }`}
                >
                  <div className="flex flex-col items-center gap-1">
                    <span className="text-center leading-tight">{categories[tab].title}</span>
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* Subcategories */}
          <div className="flex-1 overflow-y-auto">
            <div className="p-4">
              <div className="flex items-center gap-2 mb-4">
                <span className="text-green-400">$</span>
                <h2 className="text-green-300 font-bold text-sm">
                  {categories[activeTab].title}
                </h2>
                {categories[activeTab].multiSelect && (
                  <span className="text-xs text-gray-400 bg-gray-800 px-2 py-1 rounded">
                    [MULTI]
                  </span>
                )}
              </div>
              <div className="grid grid-cols-4 gap-3">
                {categories[activeTab].options.map((option) => {
                  const currentSelection = selections[activeTab] || (categories[activeTab].multiSelect ? [] : '');
                  const isSelected = categories[activeTab].multiSelect 
                    ? currentSelection.includes(option)
                    : currentSelection === option;
                  
                  return (
                    <button
                      key={option}
                      onClick={() => handleSelection(activeTab, option)}
                      className={`relative p-3 text-sm rounded border transition-all text-left h-20 w-full flex flex-col justify-start ${
                        isSelected
                          ? 'bg-green-900 border-green-400 text-green-300'
                          : 'bg-gray-800 border-gray-600 text-gray-300 hover:bg-gray-700 hover:border-gray-500'
                      }`}
                    >
                      <div className="w-full h-full overflow-hidden">
                        {option.includes('\n') ? (
                          <div>
                            <span className="block text-sm leading-tight font-medium">{option.split('\n')[0]}</span>
                            <span className="block text-xs text-gray-400 mt-1">{option.split('\n')[1]}</span>
                          </div>
                        ) : (
                          <span className="block text-sm leading-tight">{option}</span>
                        )}
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>
          </div>
        </div>

        {/* Right - Output */}
        <div className="w-1/3 bg-gray-900 flex flex-col">
          <div className="p-4 border-b border-gray-700">
            <div className="flex items-center justify-between mb-3">
              <h2 className="text-green-400 font-bold flex items-center gap-2">
                <Code2 size={16} />
                Output
              </h2>
              <div className="flex gap-2">
                <button
                  onClick={clearAll}
                  className="flex items-center gap-1 px-2 py-1 bg-gray-800 text-gray-300 rounded text-xs hover:bg-gray-700 transition-colors"
                >
                  <RefreshCw size={12} />
                  Clear
                </button>
                <button
                  onClick={copyToClipboard}
                  className="flex items-center gap-1 px-2 py-1 bg-blue-800 text-blue-300 rounded text-xs hover:bg-blue-700 transition-colors"
                >
                  <Copy size={12} />
                  Copy
                </button>
                <button
                  onClick={downloadPrompt}
                  className="flex items-center gap-1 px-2 py-1 bg-green-800 text-green-300 rounded text-xs hover:bg-green-700 transition-colors"
                >
                  <Download size={12} />
                  Save
                </button>
              </div>
            </div>
          </div>

          <div className="flex-1 overflow-y-auto">
            {/* Quick Preview */}
            <div className="p-4 border-b border-gray-700">
              <div className="bg-gray-800 border border-gray-600 rounded p-3">
                <div className="text-gray-400 text-xs mb-2">PROMPT PREVIEW:</div>
                <div className="text-green-300 text-sm leading-relaxed">
                  {generatePrompt().prompt || 'No selections made...'}
                </div>
              </div>
            </div>

            {/* JSON Output */}
            <div className="p-4">
              <div className="bg-black border border-gray-700 rounded p-3 text-xs overflow-x-auto">
                <div className="text-gray-500 mb-2">// Generated JSON</div>
                <pre className="text-green-400 whitespace-pre-wrap">
                  {JSON.stringify(generatePrompt(), null, 2)}
                </pre>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ImagePromptGenerator;