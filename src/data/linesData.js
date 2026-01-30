const lines = [
  {
    name: "Point",
    image: "css-point",
    desc: [
      "A point represents an exact location in space.",
      "It has no length, width, or thickness.",
      "It is shown as a small dot.",
      "Points are named using capital letters like A or B.",
      "All geometric shapes are formed using points."
    ]
  },
  {
    name: "Line",
    image: "css-line",
    desc: [
      "A line extends infinitely in both directions.",
      "It is perfectly straight and has no thickness.",
      "It contains infinitely many points.",
      "Lines are drawn with arrows on both ends.",
      "It represents the shortest distance between two points."
    ]
  },
  {
    name: "Line Segment",
    image: "css-segment",
    desc: [
      "A line segment has two fixed endpoints.",
      "It has a definite measurable length.",
      "It is a part of a line.",
      "It does not extend infinitely.",
      "Segments are used to build shapes."
    ]
  },
  {
    name: "Ray",
    image: "css-ray",
    desc: [
      "A ray starts at one point and extends forever in one direction.",
      "It has exactly one endpoint.",
      "It is shown with one arrow at one end.",
      "Sun rays are real-life examples.",
      "Rays are used to form angles."
    ]
  },
  {
    name: "Parallel Lines",
    image: "css-parallel",
    desc: [
      "Parallel lines never meet, no matter how far they extend.",
      "They stay the same distance apart at all points.",
      "They move in the same direction.",
      "Railway tracks are examples of parallel lines.",
      "They do not intersect."
    ]
  },
  {
    name: "Perpendicular Lines",
    image: "css-perpendicular",
    desc: [
      "Perpendicular lines intersect at a right angle (90°).",
      "They form square corners.",
      "Seen in room walls and floors.",
      "The symbol ⊥ represents perpendicularity.",
      "They meet at exactly one point."
    ]
  },
  {
    name: "Intersecting Lines",
    image: "css-intersecting",
    desc: [
      "Intersecting lines cross each other.",
      "They share one common point called the intersection.",
      "They form vertical opposite angles.",
      "Most lines in geometry eventually intersect.",
      "They can form different angle measures."
    ]
  },
  {
    name: "Horizontal Line",
    image: "css-horizontal",
    desc: [
      "A horizontal line runs left to right.",
      "It is parallel to the horizon.",
      "It has zero slope.",
      "Seen in still water surfaces.",
      "It never goes up or down."
    ]
  },
  {
    name: "Vertical Line",
    image: "css-vertical",
    desc: [
      "A vertical line runs up and down.",
      "It is perpendicular to horizontal lines.",
      "Its slope is undefined.",
      "Seen in poles and walls.",
      "It has constant x-value in graphs."
    ]
  },
  {
    name: "Diagonal Line",
    image: "css-diagonal",
    desc: [
      "A diagonal line is slanted.",
      "It connects opposite corners in shapes.",
      "It is neither horizontal nor vertical.",
      "Seen inside rectangles and squares.",
      "It often divides shapes into triangles."
    ]
  },
  {
    name: "Curved Line",
    image: "css-curved",
    desc: [
      "A curved line bends smoothly.",
      "It constantly changes direction.",
      "It is not straight.",
      "Circles and arcs are made of curved lines.",
      "Road bends are examples."
    ]
  },
  {
    name: "Zigzag Line",
    image: "css-zigzag",
    desc: [
      "A zigzag line is made of sharp turns.",
      "It forms a series of connected angles.",
      "Lightning bolts look like zigzag lines.",
      "It is made from short straight segments.",
      "It is not smooth."
    ]
  },
  {
    name: "Spiral",
    image: "css-spiral",
    desc: [
      "A spiral curves around a central point.",
      "It gradually moves farther from the center.",
      "Seen in snail shells and galaxies.",
      "It is a continuous curved line.",
      "It forms a circular pattern that expands outward."
    ]
  },
  {
    name: "Wavy Line",
    image: "css-wavy",
    desc: [
      "A wavy line moves up and down smoothly.",
      "It looks like water waves.",
      "It forms repeating curved patterns.",
      "Used to represent water or sound.",
      "It is a flowing curve."
    ]
  },
  {
    name: "Broken Line",
    image: "css-broken",
    desc: [
      "A broken line is made of straight segments joined at angles.",
      "It changes direction sharply at vertices.",
      "It is not smooth.",
      "Used in graphs and diagrams.",
      "It connects points using straight parts."
    ]
  },
  {
    name: "Arc",
    image: "css-arc",
    desc: [
      "An arc is a curved part of a circle.",
      "It has two endpoints on the circle.",
      "It is measured in degrees.",
      "Rainbows form arc shapes.",
      "It represents part of a circular boundary."
    ]
  },
  {
    name: "Chord",
    image: "css-chord",
    desc: [
      "A chord connects two points on a circle.",
      "It lies inside the circle.",
      "A diameter is the longest chord.",
      "It is a straight line segment.",
      "Used in circle geometry."
    ]
  },
  {
    name: "Tangent",
    image: "css-tangent",
    desc: [
      "A tangent touches a circle at exactly one point.",
      "It does not pass through the circle.",
      "It forms a 90° angle with the radius at the contact point.",
      "It only meets the circle once.",
      "Important in advanced geometry."
    ]
  },
  {
    name: "Secant",
    image: "css-secant",
    desc: [
      "A secant line cuts a circle at two points.",
      "It passes through the circle.",
      "It forms a chord inside the circle.",
      "It has two intersection points.",
      "Used in circle theorems."
    ]
  },
  {
    name: "Number Line",
    image: "css-numberline",
    desc: [
      "A number line represents numbers in order.",
      "It extends infinitely in both directions.",
      "Zero is at the center.",
      "Positive numbers are on the right, negative on the left.",
      "Used in arithmetic and algebra."
    ]
  },
  {
    name: "Transversal Line",
    image: "css-transversal",
    desc: [
      "A transversal intersects two or more lines.",
      "It creates different angle pairs.",
      "It is used in parallel line theorems.",
      "It forms alternate and corresponding angles.",
      "It crosses multiple lines."
    ]
  },
  {
    name: "Angle Bisector",
    image: "css-bisector",
    desc: [
      "An angle bisector divides an angle into two equal angles.",
      "It starts at the vertex of the angle.",
      "It is a ray.",
      "Used in triangle constructions.",
      "It creates equal angle measures."
    ]
  },
  {
    name: "Symmetry Line",
    image: "css-symmetry",
    desc: [
      "A symmetry line divides a shape into two equal halves.",
      "Both halves mirror each other.",
      "Also called a line of symmetry.",
      "Used in art and design.",
      "Common in regular shapes."
    ]
  },
  {
    name: "Polyline",
    image: "css-polyline",
    desc: [
      "A polyline is made of multiple connected line segments.",
      "It can have many bends.",
      "It is not curved.",
      "Used in maps and drawings.",
      "It connects several points in order."
    ]
  },
  {
    name: "Helix",
    image: "css-helix",
    desc: [
      "A helix is a spiral shape in 3D space.",
      "It moves upward while rotating.",
      "Seen in springs and DNA structures.",
      "It is a curved line in space.",
      "It combines circular motion and height."
    ]
  }
];

export default lines;
