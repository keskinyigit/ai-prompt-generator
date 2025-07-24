import React, { useState } from 'react';
import { Copy, Download, RefreshCw, Terminal, Code2 } from 'lucide-react';

const ImagePromptGenerator = () => {
  const [activeTab, setActiveTab] = useState('subject');
  const [selections, setSelections] = useState({
    subject: [],
    shotType: '',
    composition: '',
    ageRange: '',
    faceShape: [],
    skinColor: [],
    skinDetails: [],
    ethnicity: '',
    hairStyle: '',
    hairColor: '',
    pose: [],
    emotion: '',
    fashionStyle: '',
    cameraType: '',
    lensType: '',
    technical: [],
    lighting: [],
    weather: '',
    environment: '',
    specialEffects: [],
    artStyle: '',
    mood: '',
    filmFilter: '',
    inStyleOf: ''
  });

  const categories = {
    subject: {
      title: 'Subject',
      multiSelect: true,
      options: [
        'Male', 'Female', 'Nature', 'Wildlife', 'Child', 'Elderly Person', 
        'Businessman', 'Doctor', 'Teacher', 'Chef', 'Dancer', 'Musician', 
        'Artist', 'Fashion Model', 'Athlete', 'Photographer'
      ]
    },
    shotType: {
      title: 'Shot Type',
      multiSelect: false,
      options: [
        'Full Shot / Long Shot', 'Medium Shot', 'Close-up', 'Extreme Close-up', 
        'Headshot', 'Macro Shot', 'Eye-level Shot', 'Low Angle Shot', 
        'High Angle Shot', 'Bird\'s-Eye View / Top-Down Shot', 'Worm\'s-Eye View'
      ]
    },
    composition: {
      title: 'Composition',
      multiSelect: false,
      options: [
        'Rule of Thirds', 'Leading Lines', 'Symmetry', 'Asymmetry', 
        'Negative Space', 'Golden Ratio'
      ]
    },
    ageRange: {
      title: 'Age Range',
      multiSelect: false,
      options: [
        'Newborn', 'Infant', 'Toddler', 'Child', 'Teenager', '20s', 
        '30s', '40s', '50s', 'Middle-Aged', 'Senior'
      ]
    },
    faceShape: {
      title: 'Face Shape',
      multiSelect: true,
      options: [
        'Oval', 'Round', 'Square', 'Heart-shaped', 'Diamond', 'Oblong', 
        'Triangular', 'Pear-shaped', 'Strong Jawline'
      ]
    },
    skinColor: {
      title: 'Skin Color',
      multiSelect: true,
      options: [
        'Fair', 'Light', 'Medium', 'Olive', 'Tan', 'Brown', 'Dark', 'Deep', 
        'Porcelain', 'Ivory', 'Beige', 'Golden', 'Bronze', 'Caramel', 'Honey', 
        'Amber', 'Mahogany', 'Ebony', 'Rosy', 'Peachy'
      ]
    },
    skinDetails: {
      title: 'Skin Details',
      multiSelect: true,
      options: [
        'Smooth', 'Textured', 'Clear', 'Freckled', 'Moles', 'Beauty Marks', 
        'Dimples', 'Wrinkles', 'Fine Lines', 'Acne Scars', 'Pores Visible', 
        'Oily', 'Dry', 'Glowing', 'Matte', 'Dewy', 'Blemish-free'
      ]
    },
    ethnicity: {
      title: 'Ethnicity',
      multiSelect: false,
      options: [
        'African', 'African American', 'East Asian', 'European', 'Latino / Hispanic', 
        'Middle Eastern / North African', 'Mixed Race', 'Native American / Indigenous', 
        'Pacific Islander', 'Russian', 'South Asian', 'Southeast Asian', 'Ukrainian'
      ]
    },
    hairStyle: {
      title: 'Hair Style',
      multiSelect: false,
      options: [
        'Short Hair', 'Medium-length Hair', 'Long Hair', 'Very Long / Flowing Hair', 
        'Straight Hair', 'Wavy Hair', 'Curly Hair', 'Voluminous Curls', 'Afro', 
        'Locs / Dreadlocks', 'Cornrows', 'Bantu Knots', 'Classic Bob', 'Lob (Long Bob)', 
        'Shag Cut', 'Textured Crop', 'Pompadour', 'Pixie Cut', 'Buzz Cut', 'Undercut', 
        'Mohawk / Faux Hawk', 'Spiky Hair', 'Bowl Cut', 'Mullet', 'Ponytail', 
        'Sleek Bun', 'Messy Bun', 'Braided', 'Space Buns', 'French Twist', 
        'Victory Rolls / Finger Waves', 'Slicked Back', 'Crimped Hair', 'Permed Hair', 
        'Wet Look', 'Messy Fringe'
      ]
    },
    hairColor: {
      title: 'Hair Color',
      multiSelect: false,
      options: [
        'Natural Color', 'Black', 'Dark Brown', 'Medium Brown', 'Light Brown', 
        'Auburn', 'Red', 'Ginger', 'Blonde', 'Platinum Blonde', 'Grey / Silver', 
        'White', 'Pastel Colors', 'Vivid Colors', 'Rainbow Colors', 'Ombre / Balayage', 
        'Split Dye', 'Money Piece Highlights', 'Two-Tone', 'Metallic / Iridescent'
      ]
    },
    pose: {
      title: 'Pose',
      multiSelect: true,
      options: [
        'Standing', 'Sitting', 'Lying Down', 'Walking', 'Running', 'Jumping', 
        'Dancing', 'Smiling', 'Laughing', 'Serious Expression', 'Neutral Expression', 
        'Looking at Camera', 'Looking Away', 'Looking Up', 'Looking Down', 
        'Hands on Hips', 'Crossed Arms', 'Reaching Out', 'Pointing', 'Waving', 
        'Thinking Pose', 'Action Shot', 'Candid Moment'
      ]
    },
    emotion: {
      title: 'Emotion',
      multiSelect: false,
      options: [
        'Joy', 'Sadness', 'Anger', 'Fear', 'Surprise', 'Disgust', 'Contentment', 
        'Excitement', 'Anxiety', 'Calm', 'Confidence', 'Vulnerability', 'Strength', 
        'Playfulness', 'Seriousness', 'Wonder', 'Nostalgia', 'Hope', 'Despair', 
        'Love', 'Hate', 'Curiosity', 'Boredom', 'Enthusiasm'
      ]
    },
    fashionStyle: {
      title: 'Fashion Style',
      multiSelect: false,
      options: [
        'Casual', 'Formal', 'Business Professional', 'Elegant', 'Bohemian', 
        'Minimalist', 'Vintage', 'Punk', 'Gothic', 'Preppy', 'Streetwear', 
        'Haute Couture', 'Avant-garde', 'Classic', 'Sporty', 'Glamorous', 
        'Edgy', 'Romantic', 'Artistic'
      ]
    },
    cameraType: {
      title: 'Camera Type',
      multiSelect: false,
      options: [
        'Modern Full-Frame Digital Camera', 'Digital Medium Format Camera', 
        'Fujifilm Digital Camera', 'Leica Digital Camera', 'Micro Four Thirds Digital Camera', 
        'Classic 35mm Film SLR', 'High-End Film Point-and-Shoot', 'Medium Format Film Camera', 
        'Instant Film Camera', 'Smartphone Camera', 'Action Camera'
      ]
    },
    lensType: {
      title: 'Lens Type',
      multiSelect: false,
      options: [
        '"Nifty Fifty" Prime', 'Fast Portrait Prime', 'Helios 44-2 58mm f/2 (Swirly Bokeh)', 
        'Meyer-Optik Trioplan 100mm f/2.8 (Soap Bubble Bokeh)', 'Laowa 24mm f/14 Probe Lens', 
        'Modern Macro Lens', 'Tilt-Shift Lens', 'Super Telephoto Prime', 'Ultra-Wide Angle Lens', 
        'Anamorphic Lens', 'Standard Zoom Lens', '"Dreamy" Soft Focus Lens'
      ]
    },
    technical: {
      title: 'Technical',
      multiSelect: true,
      options: [
        '8K resolution', '4K resolution', 'High detail', 'Sharp focus', 'Soft focus', 
        'Grain', 'Noise', 'Clean image', 'HDR', 'Long exposure', 'Motion blur', 
        'Freeze motion', 'Bokeh'
      ]
    },
    lighting: {
      title: 'Lighting',
      multiSelect: true,
      options: [
        'Golden hour', 'Blue hour', 'Harsh sunlight', 'Soft diffused light', 
        'Natural light', 'Studio lighting', 'Backlighting', 'Rim lighting', 
        'Dramatic lighting', 'Moody lighting', 'Neon lighting', 'Candlelight', 
        'Fluorescent lighting', 'Spotlight', 'Ambient lighting', 'High contrast'
      ]
    },
    weather: {
      title: 'Weather',
      multiSelect: false,
      options: [
        'Sunny', 'Cloudy', 'Overcast', 'Rainy', 'Stormy', 'Snowy', 'Foggy', 
        'Misty', 'Windy', 'Humid', 'Dry', 'Clear sky', 'Partly cloudy', 
        'Thunderstorm', 'Drizzle', 'Hail', 'Blizzard', 'Dust storm'
      ]
    },
    environment: {
      title: 'Environment',
      multiSelect: false,
      options: [
        'Urban', 'Rural', 'Indoor', 'Outdoor', 'Studio', 'Natural setting', 
        'Industrial', 'Futuristic', 'Vintage interior', 'Minimalist space', 
        'Crowded street', 'Empty room', 'Forest', 'Beach', 'Mountain', 'Desert', 
        'Rooftop', 'Cafe', 'Gallery', 'Workshop', 'Office', 'Home', 'Concert', 
        'Festival', 'Football stadium', 'Basketball arena'
      ]
    },
    specialEffects: {
      title: 'Special Effects',
      multiSelect: true,
      options: [
        'Double exposure', 'Light trails', 'Star trails', 'Reflection', 
        'Mirror effect', 'Prism effect', 'Lens flare', 'Sun rays', 'Fire', 
        'Sparks', 'Dust particles'
      ]
    },
    artStyle: {
      title: 'Art Style',
      multiSelect: false,
      options: [
        'Photorealistic', 'Hyperrealistic', 'Cinematic', 'Documentary style', 
        'Fashion photography', 'Street photography', 'Portrait photography', 
        'Landscape photography', 'Abstract', 'Minimalist', 'Vintage', 'Retro', 
        'Film noir', 'Cyberpunk', 'Steampunk', 'Surreal'
      ]
    },
    mood: {
      title: 'Mood',
      multiSelect: false,
      options: [
        'Dramatic', 'Mysterious', 'Romantic', 'Melancholic', 'Energetic', 
        'Peaceful', 'Tense', 'Dreamy', 'Gritty', 'Elegant', 'Raw', 'Ethereal', 
        'Haunting', 'Vibrant', 'Serene', 'Dynamic'
      ]
    },
    filmFilter: {
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
    inStyleOf: {
      title: 'In the Style Of',
      multiSelect: false,
      options: [
        'Ansel Adams', 'Henri Cartier-Bresson', 'Annie Leibovitz', 'Richard Avedon', 
        'Vivian Maier', 'Steve McCurry', 'Helmut Newton', 'Diane Arbus', 'Irving Penn', 
        'Mario Testino', 'Peter Lindbergh', 'Sebastião Salgado', 'Bruce Weber', 
        'Steven Meisel', 'Tim Walker', 'David Bailey', 'Herb Ritts', 'Guy Bourdin', 
        'Ellen von Unwerth', 'Patrick Demarchelier', 'Platon', 'Gregory Crewdson', 
        'Cindy Sherman', 'Andreas Gursky', 'Joel Meyerowitz', 'Robert Frank', 
        'Dorothea Lange', 'Edward Weston', 'Frans Lanting', 'Nick Brandt', 
        'Jimmy Nelson', 'Martin Parr', 'Joe McNally', 'David LaChapelle', 
        'Paolo Roversi', 'Sally Mann'
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

  const generateNaturalPrompt = () => {
    const activeSelections = Object.entries(selections)
      .filter(([_, value]) => {
        return Array.isArray(value) ? value.length > 0 : value !== '';
      })
      .reduce((acc, [key, value]) => {
        acc[key] = value;
        return acc;
      }, {});

    if (Object.keys(activeSelections).length === 0) {
      return 'A captivating photograph waiting to be defined...';
    }

    let sentences = [];
    
    // SENTENCE 1: Main shot description with subject and demographics
    let sentence1Parts = [];
    
    // Build opening with art style and mood
    const openingModifiers = [];
    if (activeSelections.artStyle) {
      openingModifiers.push(activeSelections.artStyle.toLowerCase());
    }
    if (activeSelections.mood) {
      openingModifiers.push(activeSelections.mood.toLowerCase());
    }
    
    let opener = openingModifiers.length > 0 ? 
      `A ${openingModifiers.join(', ')}` : 'A';

    // Add shot type
    let shotDescription = '';
    if (activeSelections.shotType) {
      const shot = activeSelections.shotType.toLowerCase();
      if (shot.includes('shot') || shot.includes('view')) {
        shotDescription = shot;
      } else {
        shotDescription = shot + ' shot';
      }
    }
    
    // Build subject description with demographics
    const subjectParts = [];
    if (activeSelections.ageRange) {
      subjectParts.push(activeSelections.ageRange.toLowerCase());
    }
    if (activeSelections.ethnicity) {
      subjectParts.push(activeSelections.ethnicity.toLowerCase());
    }
    if (activeSelections.subject && activeSelections.subject.length > 0) {
      subjectParts.push(activeSelections.subject[0].toLowerCase());
    }
    
    const subjectDescription = subjectParts.join(' ') || 'person';
    
    // Combine main elements
    if (shotDescription) {
      sentence1Parts.push(`${opener} ${shotDescription} of a ${subjectDescription}`);
    } else {
      sentence1Parts.push(`${opener} ${subjectDescription}`);
    }
    
    // Add physical characteristics
    const physicalTraits = [];
    if (activeSelections.skinColor && activeSelections.skinColor.length > 0) {
      physicalTraits.push(`${activeSelections.skinColor[0].toLowerCase()} skin`);
    }
    if (activeSelections.faceShape && activeSelections.faceShape.length > 0) {
      physicalTraits.push(`${activeSelections.faceShape[0].toLowerCase()} face`);
    }
    if (activeSelections.skinDetails && activeSelections.skinDetails.length > 0) {
      physicalTraits.push(activeSelections.skinDetails.slice(0, 2).join(', ').toLowerCase());
    }
    
    if (physicalTraits.length > 0) {
      sentence1Parts.push(` with ${physicalTraits.join(', ')}`);
    }
    
    // Add pose and emotion
    if (activeSelections.pose && activeSelections.pose.length > 0) {
      sentence1Parts.push(`, ${activeSelections.pose[0].toLowerCase()}`);
    }
    if (activeSelections.emotion) {
      sentence1Parts.push(` with ${activeSelections.emotion.toLowerCase()}`);
    }
    
    // Add environment
    if (activeSelections.environment) {
      sentence1Parts.push(` in a ${activeSelections.environment.toLowerCase()} setting`);
    }
    
    sentences.push(sentence1Parts.join('') + '.');
    
    // SENTENCE 2: Hair and fashion details
    const styleDetails = [];
    if (activeSelections.hairStyle) {
      const hair = activeSelections.hairStyle.toLowerCase();
      const hairColor = activeSelections.hairColor ? 
        activeSelections.hairColor.toLowerCase() : '';
      styleDetails.push(`${hairColor ? hairColor + ' ' : ''}${hair}`);
    }
    if (activeSelections.fashionStyle) {
      styleDetails.push(`wearing ${activeSelections.fashionStyle.toLowerCase()} attire`);
    }
    
    if (styleDetails.length > 0) {
      const pronoun = activeSelections.subject && activeSelections.subject.includes('Female') ? 'She has' : 'They have';
      sentences.push(`${pronoun} ${styleDetails.join(' and ')}.`);
    }
    
    // SENTENCE 3: Technical and camera details
    const technicalDetails = [];
    if (activeSelections.cameraType) {
      technicalDetails.push(`shot with a ${activeSelections.cameraType.toLowerCase()}`);
    }
    if (activeSelections.lensType) {
      technicalDetails.push(`using a ${activeSelections.lensType.toLowerCase()}`);
    }
    if (activeSelections.composition) {
      technicalDetails.push(`composed with ${activeSelections.composition.toLowerCase()}`);
    }
    if (activeSelections.lighting && activeSelections.lighting.length > 0) {
      technicalDetails.push(`illuminated by ${activeSelections.lighting[0].toLowerCase()}`);
    }
    
    if (technicalDetails.length > 0) {
      sentences.push(`The photograph is ${technicalDetails.slice(0, 3).join(', ')}.`);
    }
    
    // SENTENCE 4: Atmospheric details
    const atmosphericDetails = [];
    if (activeSelections.weather) {
      atmosphericDetails.push(`captured in ${activeSelections.weather.toLowerCase()} conditions`);
    }
    if (activeSelections.specialEffects && activeSelections.specialEffects.length > 0) {
      atmosphericDetails.push(`enhanced with ${activeSelections.specialEffects[0].toLowerCase()}`);
    }
    if (activeSelections.technical && activeSelections.technical.length > 0) {
      atmosphericDetails.push(`rendered in ${activeSelections.technical[0].toLowerCase()}`);
    }
    
    if (atmosphericDetails.length > 0) {
      sentences.push(`The image is ${atmosphericDetails.slice(0, 3).join(', ')}.`);
    }
    
    // SENTENCE 5: Film filter and artistic inspiration
    const artisticDetails = [];
    if (activeSelections.filmFilter) {
      artisticDetails.push(`processed with ${activeSelections.filmFilter} film aesthetic`);
    }
    if (activeSelections.inStyleOf) {
      artisticDetails.push(`inspired by the work of ${activeSelections.inStyleOf}`);
    }
    
    if (artisticDetails.length > 0) {
      sentences.push(`The style is ${artisticDetails.join(' and ')}.`);
    }
    
    return sentences.join(' ');
  };

  const generatePrompt = () => {
    const activeSelections = Object.entries(selections)
      .filter(([_, value]) => {
        return Array.isArray(value) ? value.length > 0 : value !== '';
      })
      .reduce((acc, [key, value]) => {
        acc[key] = value;
        return acc;
      }, {});

    const naturalPrompt = generateNaturalPrompt();
    
    return {
      prompt: naturalPrompt,
      parameters: activeSelections
    };
  };

  const copyJsonPrompt = () => {
    const prompt = generatePrompt();
    navigator.clipboard.writeText(JSON.stringify(prompt, null, 2));
  };

  const copyNaturalPrompt = () => {
    const naturalPrompt = generateNaturalPrompt();
    navigator.clipboard.writeText(naturalPrompt);
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
      subject: [], shotType: '', composition: '', ageRange: '', faceShape: [], 
      skinColor: [], skinDetails: [], ethnicity: '', hairStyle: '', hairColor: '', 
      pose: [], emotion: '', fashionStyle: '', cameraType: '', lensType: '', 
      technical: [], lighting: [], weather: '', environment: '', specialEffects: [], 
      artStyle: '', mood: '', filmFilter: '', inStyleOf: ''
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
        <p className="text-green-300 text-sm mt-1 opacity-80">prompt generator with natural language and json output</p>
      </div>

      <div className="flex h-screen">
        {/* Left Side - Categories and Subcategories */}
        <div className="w-2/3 bg-gray-900 border-r border-gray-700 flex flex-col">
          {/* Categories Grid */}
          <div className="p-4 border-b border-gray-700">
            <h2 className="text-green-400 font-bold text-sm uppercase tracking-wide mb-4">Categories</h2>
            <div className="grid grid-cols-6 gap-2">
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
              <div className="grid grid-cols-5 gap-2">
                {categories[activeTab].options.map((option) => {
                  const currentSelection = selections[activeTab] || (categories[activeTab].multiSelect ? [] : '');
                  const isSelected = categories[activeTab].multiSelect 
                    ? currentSelection.includes(option)
                    : currentSelection === option;
                  
                  // Check if this option should be grayed out for single-select categories
                  const shouldGrayOut = !categories[activeTab].multiSelect && 
                                       currentSelection !== '' && 
                                       currentSelection !== option;
                  
                  return (
                    <button
                      key={option}
                      onClick={() => handleSelection(activeTab, option)}
                      disabled={shouldGrayOut}
                      className={`relative p-2 text-xs rounded border transition-all text-left h-16 w-full flex flex-col justify-start ${
                        isSelected
                          ? 'bg-green-900 border-green-400 text-green-300 shadow-lg shadow-green-400/20'
                          : shouldGrayOut
                          ? 'bg-gray-700 border-gray-600 text-gray-500 cursor-not-allowed opacity-50'
                          : 'bg-gray-800 border-gray-600 text-gray-300 hover:bg-gray-700 hover:border-gray-500 hover:shadow-sm hover:shadow-green-400/10'
                      }`}
                    >
                      <div className="w-full h-full overflow-hidden">
                        <span className="block text-xs leading-tight">{option}</span>
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
                  onClick={copyJsonPrompt}
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
            {/* Natural Language Prompt */}
            <div className="p-4 border-b border-gray-700">
              <div className="flex items-center justify-between mb-2">
                <div className="text-gray-400 text-xs">NATURAL PROMPT:</div>
                <button
                  onClick={copyNaturalPrompt}
                  className="flex items-center gap-1 px-2 py-1 bg-blue-800 text-blue-300 rounded text-xs hover:bg-blue-700 transition-colors"
                >
                  <Copy size={12} />
                  Copy
                </button>
              </div>
              <div className="bg-gray-800 border border-gray-600 rounded p-3 mb-3">
                <div className="text-green-300 text-sm leading-relaxed">
                  {generateNaturalPrompt()}
                </div>
              </div>
            </div>

            {/* JSON Output */}
            <div className="p-4">
              <div className="flex items-center justify-between mb-2">
                <div className="text-gray-400 text-xs">JSON OUTPUT:</div>
                <button
                  onClick={copyJsonPrompt}
                  className="flex items-center gap-1 px-2 py-1 bg-blue-800 text-blue-300 rounded text-xs hover:bg-blue-700 transition-colors"
                >
                  <Copy size={12} />
                  Copy
                </button>
              </div>
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