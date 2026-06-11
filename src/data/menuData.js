export const menuData = {
  appetizers: [
    {
      id: "app-1",
      name: "Smoked Wagyu Suya Carpaccio",
      price: "₦28,500 / $35",
      description: "Thinner-sliced Wagyu beef carpaccio infused with artisanal yaji spice oil, finished with pickled red shallots, wild watercress, and shaved local truffles.",
      ingredients: ["Wagyu Beef", "Yaji Spice", "Cold-pressed Peanut Oil", "Truffles", "Watercress"],
      story: "A luxurious reinterpretation of the traditional West African suya street delicacy, combining marbled Japanese beef with the ancestral heat of Hausa yaji spices.",
      image: "https://images.unsplash.com/photo-1544025162-d76694265947?q=80&w=800"
    },
    {
      id: "app-2",
      name: "Pepper Soup Consommé",
      price: "₦18,000 / $22",
      description: "A crystal-clear, deeply aromatic broth of slow-simmered Uda pods and Ehuru seeds, poured tableside over charcoal-grilled jumbo tiger prawn and wild oyster mushrooms.",
      ingredients: ["Tiger Prawn", "Ehuru (Calabash Nutmeg)", "Uda (Selim Pepper)", "Lemongrass", "Wild Mushrooms"],
      story: "Inspired by the comforting spice-infused pepper soup of southern Nigeria, refined into an elegant French-style consommé that cleanses and excites the palate.",
      image: "https://images.unsplash.com/photo-1547592180-85f173990554?q=80&w=800"
    },
    {
      id: "app-3",
      name: "Deconstructed Gizdodo",
      price: "₦22,500 / $28",
      description: "Tender crispy duck gizzard confit, smooth sweet plantain purée, roasted bell pepper coulis, and caramelized shallot rings.",
      ingredients: ["Duck Gizzard", "Plantain", "Bell Pepper", "Garlic", "Hearth Herbs"],
      story: "Bridging the homey party favorite of gizzard and plantains (gizdodo) with classic French confit techniques, creating a playful contrast of textures and sweet-savory flavors.",
      image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?q=80&w=800"
    }
  ],
  mains: [
    {
      id: "main-1",
      name: "Hearth Jollof Risotto",
      price: "₦42,000 / $52",
      description: "Arborio rice slow-stirred in a smoky wood-fired tomato and Scotch bonnet reduction, topped with a butter-poached lobster tail, roasted cherry tomatoes, and micro-basil.",
      ingredients: ["Arborio Rice", "Scotch Bonnet", "Lobster Tail", "Smoked Paprika", "Plum Tomato"],
      story: "The ultimate cross-cultural masterpiece: the iconic West African smoky Jollof flavor meets the creamy, velvety texture of a classic Italian risotto.",
      image: "https://images.unsplash.com/photo-1512058564366-18510be2db19?q=80&w=800"
    },
    {
      id: "main-2",
      name: "Sea Bass with Efo Riro Reduction",
      price: "₦38,500 / $48",
      description: "Pan-seared Chilean sea bass served on a vibrant bed of wild spinach reduction infused with locust bean oil, dehydrated red peppers, and crispy shrimp dust.",
      ingredients: ["Chilean Sea Bass", "Wild Spinach (Efo)", "Iru (Locust Beans)", "Crayfish", "Palm Oil Essence"],
      story: "The coastal delicacy of fish is elevated by the deep umami notes of fermented locust beans (Iru) and fresh, iron-rich spinach slow-cooked over wood embers.",
      image: "https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?q=80&w=800"
    },
    {
      id: "main-3",
      name: "Sous-Vide Goat Suya with Truffle Yam Mash",
      price: "₦46,000 / $58",
      description: "Local goat shoulder cooked sous-vide for 36 hours, crusted with toasted peanut suya dust, seared on cherrywood charcoal, accompanied by truffle-infused white yam purée.",
      ingredients: ["Goat Shoulder", "White Yam", "Truffle Butter", "Peanut Yaji", "Red Onion Pickle"],
      story: "Goat meat is a staple of Nigerian celebrations. Slow-cooking it ensures melting tenderness, while truffle and yam create an earthy, rich base.",
      image: "https://images.unsplash.com/photo-1600891964599-f61ba0e24092?q=80&w=800"
    },
    {
      id: "main-4",
      name: "Duck Breast with Zobo Glaze",
      price: "₦39,000 / $49",
      description: "Medium-rare roasted duck breast, sweet potato purée, roasted baby carrots, finished with a tart, spiced hibiscus (zobo) flower and red wine reduction.",
      ingredients: ["Duck Breast", "Hibiscus (Zobo)", "Sweet Potato", "Cloves", "Ginger"],
      story: "Zobo is a widely loved refreshing hibiscus drink. Here, we reduce it with red wine, cloves, and ginger to create a sweet, tangy glaze that cuts through the rich duck meat.",
      image: "https://images.unsplash.com/photo-1514516345957-556ca7d90a29?q=80&w=800"
    }
  ],
  desserts: [
    {
      id: "des-1",
      name: "Cardamom Puff-Puff Beignets",
      price: "₦12,500 / $16",
      description: "Warm, pillowy cardamom-scented fried dough, dusted with cinnamon sugar, served alongside a warm salted caramel dip and toasted coconut cream.",
      ingredients: ["Yeast Dough", "Cardamom", "Salted Caramel", "Coconut Cream", "Cinnamon"],
      story: "A gourmet upgrade to Nigeria's beloved puff-puff street snack, infused with warm cardamom and paired with rich, salty caramel.",
      image: "https://images.unsplash.com/photo-1551024601-bec78aea704b?q=80&w=800"
    },
    {
      id: "des-2",
      name: "Zobo-Berry Hibiscus Sorbet",
      price: "₦11,000 / $14",
      description: "A refreshing sorbet made from steeped organic hibiscus petals, wild strawberries, and mint, garnished with gold leaf and dehydrated orange wheel.",
      ingredients: ["Hibiscus Petals", "Strawberries", "Fresh Mint", "Edible Gold Leaf"],
      story: "A clean, vibrant dessert designed to refresh the senses after a meal rich in smoke and spices.",
      image: "https://images.unsplash.com/photo-1572490122747-3968b75cc699?q=80&w=800"
    },
    {
      id: "des-3",
      name: "Lemongrass & Ginger Crème Brûlée",
      price: "₦14,000 / $18",
      description: "Silky vanilla bean custard infused with fresh lemongrass stalks and organic ginger root, finished with a glass-like caramelized brown sugar crust.",
      ingredients: ["Vanilla Bean", "Lemongrass", "Ginger", "Brown Sugar"],
      story: "The classic French dessert is reimagined with the bright, sharp citrus of lemongrass and the fiery depth of local ginger.",
      image: "https://images.unsplash.com/photo-1470324161839-ce2bb6fa6bc3?q=80&w=800"
    }
  ],
  pairings: [
    {
      id: "pair-1",
      name: "Hearth Palm Wine Sangria",
      price: "₦9,500 / $12",
      description: "Fresh tapped palm wine infused with triple sec, fresh orange bitters, cinnamon sticks, and sliced apples.",
      ingredients: ["Palm Wine", "Triple Sec", "Orange Bitters", "Cinnamon", "Apples"],
      story: "Our house specialty, blending the effervescent sweetness of natural palm wine with botanical continental cocktail highlights.",
      image: "https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?q=80&w=800"
    },
    {
      id: "pair-2",
      name: "Zobo Hibiscus Old Fashioned",
      price: "₦12,000 / $15",
      description: "Premium bourbon, concentrated spiced zobo reduction, aromatic bitters, orange twist.",
      ingredients: ["Bourbon", "Zobo Reduction", "Angostura Bitters", "Orange Twist"],
      story: "A smoky, sweet, and complex cocktail that pairs beautifully with our Wagyu Suya or Goat shoulder.",
      image: "https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?q=80&w=800"
    }
  ]
};
