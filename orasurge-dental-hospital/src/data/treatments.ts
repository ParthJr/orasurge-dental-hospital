import { TreatmentItem } from '../types';

export const TREATMENTS_DATA: TreatmentItem[] = [
  {
    id: 'checkups',
    modCode: 'MOD_01 // DIAGNOSTICS',
    category: 'Diagnostics',
    title: 'Dental Check-ups',
    description: 'Full-spectrum intraoral optical scanning, digital volumetric CBCT assessment, and periodontal health mapping.',
    tags: ['CBCT 3D', 'HD INTRAORAL'],
    actionLabel: 'Schedule Diagnostic',
    accentColor: 'lime',
    icon: 'biotech',
    fullDetails: {
      overview: 'A comprehensive oral health diagnostic assessment utilizing low-dose volumetric cone-beam tomography (CBCT) and optical intraoral surface digitizers to inspect teeth, alveolar bone, and surrounding facial structures.',
      diagnosticEquipment: ['Digital Cone Beam Computed Tomography (CBCT)', 'HD Optical Surface Intraoral Scanner', 'Periodontal Probing Matrix'],
      typicalDuration: '45 – 60 minutes',
      clinicalPhases: ['Initial visual and periodontal charting', '3D volumetric radiographic capture', 'Joint surgeon-patient review of anatomical models'],
      suitableFor: 'Routine check-ups, preventative monitoring, and pre-surgical diagnostic mapping.'
    }
  },
  {
    id: 'general',
    modCode: 'MOD_02 // PREVENTIVE',
    category: 'Preventive Care',
    title: 'General Dental Care',
    description: 'Systematic preventative hygiene, micro-ultrasonic scaling, composite prophylaxis, and tooth conservation protocols.',
    tags: ['PROPHYLAXIS', 'PRESERVATION'],
    actionLabel: 'View General Protocols',
    accentColor: 'blue',
    icon: 'dentistry',
    fullDetails: {
      overview: 'Focuses on the preservation of natural dentition through meticulous calculus removal, enamel debridement, and conservative restorations aimed at maintaining long-term oral stability.',
      diagnosticEquipment: ['Ultrasonic Magnetostrictive Scalers', 'Optical Cavity Transillumination', 'Composite Polymerization Systems'],
      typicalDuration: '30 – 45 minutes',
      clinicalPhases: ['Evaluation of tooth surfaces and gingival margins', 'Selective ultrasonic prophylaxis', 'Preventive varnish and oral health home-care planning'],
      suitableFor: 'Patients seeking oral maintenance, tartar removal, and early caries intervention.'
    }
  },
  {
    id: 'cosmetic',
    modCode: 'MOD_03 // AESTHETICS',
    category: 'Aesthetics',
    title: 'Cosmetic Dentistry',
    description: 'Digital smile design (DSD), ultra-thin ceramic veneers, optical chromacity matching, and enamel contouring.',
    tags: ['CERAMIC FACETS', 'SHADE HARMONY'],
    actionLabel: 'Analyze Smile Symmetry',
    accentColor: 'lime',
    icon: 'face',
    fullDetails: {
      overview: 'Engineered aesthetic smile enhancements prioritizing facial balance, dental proportion, and natural light refraction through custom porcelain facets and micro-contouring.',
      diagnosticEquipment: ['Digital Smile Design (DSD) Photometric Suite', 'Spectrophotometric Shade Calibration', 'Micro-thin Ceramic Articulation'],
      typicalDuration: 'Multi-visit phased procedure',
      clinicalPhases: ['High-resolution facial and dental photography', 'Digital mockup and trial smile preview', 'Conservative tooth preparation and lab fabrication', 'Final bonding and bite calibration'],
      suitableFor: 'Chipped, discolored, unevenly spaced, or worn anterior dentition.'
    }
  },
  {
    id: 'implants',
    modCode: 'MOD_04 // ROBOTIC GUIDANCE',
    category: 'Robotic Guidance',
    title: 'Dental Implants',
    description: 'Sub-millimeter computer-guided titanium implantology, immediate extraction loading, and full-arch biomechanical rehabilitation.',
    tags: ['SUB-MM SURGERY', 'FULL-ARCH'],
    actionLabel: 'Review Implant Specs',
    accentColor: 'lime',
    icon: 'precision_manufacturing',
    isAnchor: true,
    fullDetails: {
      overview: 'Titanium and zirconia fixture placement governed by computer-designed 3D surgical stents to restore missing teeth with structural rigidity and anatomical fidelity.',
      diagnosticEquipment: ['3D Stereolithographic Guided Stents', 'Torque-Controlled Surgical Drill Units', 'Bone Density Tomography Analysis'],
      typicalDuration: 'Varies by bone architecture and loading protocol',
      clinicalPhases: ['CBCT bone density and nerve canal mapping', 'Virtual surgical guide CAD modeling and 3D printing', 'Flapless or guided fixture osteotomy', 'Provisional loading and final osseointegration restoration'],
      suitableFor: 'Single tooth loss, multiple missing teeth, or fully edentulous arches.'
    }
  },
  {
    id: 'restorative',
    modCode: 'MOD_05 // STRUCTURAL',
    category: 'Structural Care',
    title: 'Restorative Care',
    description: 'CAD/CAM zirconia crowns, anatomical inlays/onlays, and microsurgical root canal endodontic restoration.',
    tags: ['ZIRCONIA CAD', 'ENDODONTICS'],
    actionLabel: 'Restorative Options',
    accentColor: 'blue',
    icon: 'build',
    fullDetails: {
      overview: 'Reconstruction of structurally compromised teeth utilizing monolithic zirconia crowns, ceramic inlays, and rotary endodontic disinfection to protect the tooth root.',
      diagnosticEquipment: ['Apex Locators & Rotary Endodontic Motors', 'Milling CAD/CAM Zirconia Sintering Systems', 'Intraoral Digital Margin Verification'],
      typicalDuration: '1 – 2 appointments depending on clinical case',
      clinicalPhases: ['Removal of infected tooth structure', 'Root canal sealing or margin preparation', 'Digital optical impression and laboratory milling', 'Adhesive cementation with occlusal balance verification'],
      suitableFor: 'Deep dental caries, fractured cusps, and severely decayed or root-canal treated teeth.'
    }
  },
  {
    id: 'emergency',
    modCode: 'MOD_06 // IMMEDIATE TRIAGE',
    category: 'Immediate Triage',
    title: 'Emergency Care',
    description: 'Rapid clinical assessment for acute pulpitis, facial trauma, dislodged restorations, and immediate pain alleviation.',
    tags: ['RAPID RESPONSE', 'TRIAGE READY'],
    actionLabel: 'Emergency Hotline (098251 98854)',
    accentColor: 'red',
    icon: 'emergency',
    fullDetails: {
      overview: 'Dedicated triage workflow designed to promptly arrest acute dental pain, control hemorrhage, stabilize traumatized teeth, and diagnose emergency infections.',
      diagnosticEquipment: ['Emergency Radiographic Protocol', 'Immediate Endodontic Access Kits', 'Trauma Splinting Matrix'],
      typicalDuration: 'Immediate triage assessment',
      clinicalPhases: ['Urgent symptom and pulp vitality assessment', 'Anesthetic pain alleviation protocol', 'Temporary stabilization or definitive intervention', 'Follow-up appointment scheduling'],
      suitableFor: 'Acute throbbing toothaches, knocked-out teeth, broken dentures, facial swelling, or severe dental trauma.'
    }
  }
];
