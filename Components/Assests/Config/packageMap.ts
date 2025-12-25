import Colours from '../Common/Colors';

export const PACKAGE_MAP: Record<string, { icon: any; color: string }> = {
  Drums: {
    icon: require('../Images/icons/Drums.png'),
    color: Colours.blueBright,
  },
  Barrel: {
    icon: require('../Images/icons/Drums.png'),
    color: Colours.blueBright,
  },
  'Bulk Tanker': {
    icon: require('../Images/icons/bulk_tanker.png'),
    color: Colours.greenBright,
  },
  Bulk: {
    icon: require('../Images/icons/bulk_tanker.png'),
    color: Colours.greenBright,
  },
  Rail: {
    icon: require('../Images/icons/rail.png'),
    color: Colours.pink,
  },
  Carton: {
    icon: require('../Images/icons/Drums.png'),
    color: Colours.pink,
  },
  Retail: {
    icon: require('../Images/icons/fuel_pump.png'),
    color: Colours.pink,
  },
};
