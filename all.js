var AnimalList, BasePresenter, ColorList, HomePresenter,
  extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
  hasProp = {}.hasOwnProperty;

AnimalList = ["Aardvark", "Albatross", "Alligator", "Alpaca", "Ant", "Anteater", "Antelope", "Ape", "Armadillo", "Ass", "Donkey", "Baboon", "Badger", "Barracuda", "Bat", "Bear", "Beaver", "Bee", "Bison", "Boar", "Buffalo", "Galago", "Butterfly", "Camel", "Caribou", "Cat", "Caterpillar", "Cattle", "Chamois", "Cheetah", "Chicken", "Chimpanzee", "Chinchilla", "Chough", "Clam", "Cobra", "Cockroach", "Cod", "Cormorant", "Coyote", "Crab", "Crane", "Crocodile", "Crow", "Curlew", "Deer", "Dinosaur", "Dog", "Dogfish", "Dolphin", "Donkey", "Dotterel", "Dove", "Dragonfly", "Duck", "Dugong", "Dunlin", "Eagle", "Echidna", "Eel", "Eland", "Elephant", "Elephant seal", "Elk", "Emu", "Falcon", "Ferret", "Finch", "Fish", "Flamingo", "Fly", "Fox", "Frog", "Gaur", "Gazelle", "Gerbil", "Giant Panda", "Giraffe", "Gnat", "Gnu", "Goat", "Goose", "Goldfinch", "Goldfish", "Gorilla", "Goshawk", "Grasshopper", "Grouse", "Guanaco", "Guinea fowl", "Guinea pig", "Gull", "Hamster", "Hare", "Hawk", "Hedgehog", "Heron", "Herring", "Hippopotamus", "Hornet", "Horse", "Human", "Hummingbird", "Hyena", "Jackal", "Jaguar", "Jay", "Jellyfish", "Kangaroo", "Koala", "Komodo dragon", "Kouprey", "Kudu", "Lapwing", "Lark", "Lemur", "Leopard", "Lion", "Llama", "Lobster", "Locust", "Loris", "Louse", "Lyrebird", "Magpie", "Mallard", "Manatee", "Marten", "Meerkat", "Mink", "Mole", "Monkey", "Moose", "Mouse", "Mosquito", "Mule", "Narwhal", "Newt", "Nightingale", "Octopus", "Okapi", "Opossum", "Oryx", "Ostrich", "Otter", "Owl", "Ox", "Oyster", "Panther", "Parrot", "Partridge", "Peafowl", "Pelican", "Penguin", "Pheasant", "Pig", "Pigeon", "Pony", "Porcupine", "Porpoise", "Prairie Dog", "Quail", "Quelea", "Rabbit", "Raccoon", "Rail", "Ram", "Rat", "Raven", "Reindeer", "Rhinoceros", "Rook", "Ruff", "Salamander", "Salmon", "Sand Dollar", "Sandpiper", "Sardine", "Scorpion", "Sea lion", "Sea Urchin", "Seahorse", "Seal", "Shark", "Sheep", "Shrew", "Shrimp", "Skunk", "Snail", "Snake", "Spider", "Squid", "Squirrel", "Starling", "Stingray", "Stinkbug", "Stork", "Swallow", "Swan", "Tapir", "Tarsier", "Termite", "Tiger", "Toad", "Trout", "Turkey", "Turtle", "Vicuña", "Viper", "Vulture", "Wallaby", "Walrus", "Wasp", "Water buffalo", "Weasel", "Whale", "Wolf", "Wolverine", "Wombat", "Woodcock", "Woodpecker", "Worm", "Wren", "Yak", "Zebra"];

ColorList = ["IndianRed", "LightCoral", "Salmon", "DarkSalmon", "LightSalmon", "Crimson", "Red", "FireBrick", "DarkRed", "Pink", "LightPink", "HotPink", "DeepPink", "MediumVioletRed", "PaleVioletRed", "LightSalmon", "Coral", "Tomato", "OrangeRed", "DarkOrange", "Orange", "Gold", "Yellow", "LightYellow", "LemonChiffon", "LightGoldenrodYellow", "PapayaWhip", "Moccasin", "PeachPuff", "PaleGoldenrod", "Khaki", "DarkKhaki", "Lavender", "Thistle", "Plum", "Violet", "Orchid", "Fuchsia", "Magenta", "MediumOrchid", "MediumPurple", "RebeccaPurple", "BlueViolet", "DarkViolet", "DarkOrchid", "DarkMagenta", "Purple", "Indigo", "SlateBlue", "DarkSlateBlue", "MediumSlateBlue", "GreenYellow", "Chartreuse", "LawnGreen", "Lime", "LimeGreen", "PaleGreen", "LightGreen", "MediumSpringGreen", "SpringGreen", "MediumSeaGreen", "SeaGreen", "ForestGreen", "Green", "DarkGreen", "YellowGreen", "OliveDrab", "Olive", "DarkOliveGreen", "MediumAquamarine", "DarkSeaGreen", "LightSeaGreen", "DarkCyan", "Teal", "Aqua", "Cyan", "LightCyan", "PaleTurquoise", "Aquamarine", "Turquoise", "MediumTurquoise", "DarkTurquoise", "CadetBlue", "SteelBlue", "LightSteelBlue", "PowderBlue", "LightBlue", "SkyBlue", "LightSkyBlue", "DeepSkyBlue", "DodgerBlue", "CornflowerBlue", "MediumSlateBlue", "RoyalBlue", "Blue", "MediumBlue", "DarkBlue", "Navy", "MidnightBlue", "Cornsilk", "BlanchedAlmond", "Bisque", "NavajoWhite", "Wheat", "BurlyWood", "Tan", "RosyBrown", "SandyBrown", "Goldenrod", "DarkGoldenrod", "Peru", "Chocolate", "SaddleBrown", "Sienna", "Brown", "Maroon", "White", "Snow", "HoneyDew", "MintCream", "Azure", "AliceBlue", "GhostWhite", "WhiteSmoke", "SeaShell", "Beige", "OldLace", "FloralWhite", "Ivory", "AntiqueWhite", "Linen", "LavenderBlush", "MistyRose", "Gainsboro", "LightGray", "Silver", "DarkGray", "Gray", "DimGray", "LightSlateGray", "SlateGray", "DarkSlateGray", "Black"];

BasePresenter = (function() {
  function BasePresenter() {
    $(document).ready((function(_this) {
      return function() {
        return _this.onCreate();
      };
    })(this));
  }

  BasePresenter.prototype.onCreate = function() {};

  return BasePresenter;

})();

HomePresenter = (function(superClass) {
  extend(HomePresenter, superClass);

  function HomePresenter() {
    return HomePresenter.__super__.constructor.apply(this, arguments);
  }

  HomePresenter.prototype.random = function(list) {
    var i;
    i = Math.floor(Math.random() * list.length);
    return list[i];
  };

  HomePresenter.prototype.engineName = function(value) {
    var c, i, j, outcome, ref, trimmedValue;
    trimmedValue = value.trim();
    outcome = "";
    for (i = j = 0, ref = trimmedValue.length; 0 <= ref ? j < ref : j > ref; i = 0 <= ref ? ++j : --j) {
      c = trimmedValue[i];
      if (c === " ") {
        outcome += "-";
      } else if (c === c.toUpperCase() && i > 0 && trimmedValue[i - 1] !== "-") {
        outcome += "-" + c.toLowerCase();
      } else {
        outcome += c.toLowerCase();
      }
    }
    return outcome;
  };

  HomePresenter.prototype.generateName = function() {
    var animal, color;
    color = this.engineName(this.random(ColorList));
    animal = this.engineName(this.random(AnimalList));
    return color + "-" + animal;
  };

  HomePresenter.prototype.onCreate = function() {
    HomePresenter.__super__.onCreate.apply(this, arguments);
    this.releaseNameField = $('.js-release-name');
    this.clipboardAction = new Clipboard('.js-clipboard-action');
    this.releaseNameField.text(this.generateName());
    return $('.js-generate').on('click', (function(_this) {
      return function() {
        return _this.releaseNameField.text(_this.generateName());
      };
    })(this));
  };

  return HomePresenter;

})(BasePresenter);
