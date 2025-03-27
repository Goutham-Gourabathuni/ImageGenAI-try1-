import logo from './logo.svg';
import logoIcon from './logo_icon.svg';
import facebookIcon from './facebook_icon.svg';
import instagramIcon from './instagram_icon.svg';
import twitterIcon from './twitter_icon.svg';
import starIcon from './star_icon.svg';
import ratingStar from './rating_star.svg';
import sampleImg1 from './sample_img_1.png';
import sampleImg2 from './sample_img_2.png';
import profileImg1 from './profile_img_1.png';
import profileImg2 from './profile_img_2.png';
import stepIcon1 from './step_icon_1.svg';
import stepIcon2 from './step_icon_2.svg';
import stepIcon3 from './step_icon_3.svg';
import emailIcon from './email_icon.svg';
import lockIcon from './lock_icon.svg';
import crossIcon from './cross_icon.svg';
import starGroup from './star_group.png';
import creditStar from './credit_star.svg';
import profileIcon from './profile_icon.png';

export const assets = {
  logo,
  logoIcon,
  facebookIcon,
  instagramIcon,
  twitterIcon,
  starIcon,
  ratingStar,
  sampleImg1,
  sampleImg2,
  emailIcon,
  lockIcon,
  crossIcon,
  starGroup,
  creditStar,
  profileIcon,
};

export const stepsData = [
  {
    title: 'Describe Your Vision',
    description: 'Type a phrase, sentence, or paragraph that describes the image you want to create.',
    icon: stepIcon1,
  },
  {
    title: 'Watch the Magic',
    description: 'Our AI-powered engine will transform your text into a high-quality, unique image in seconds.',
    icon: stepIcon2,
  },
  {
    title: 'Download & Share',
    description: 'Instantly download your creation or share it with the world directly from our platform.',
    icon: stepIcon3,
  },
];

export const testimonialsData = [
  {
    image: profileImg1,
    name: 'Donald Jackman',
    role: 'Graphic Designer',
    stars: 5,
    text: 'I’ve been using bg.removal for nearly two years, primarily for Instagram, and it has been incredibly user-friendly, making my work much easier.',
  },
  {
    image: profileImg2,
    name: 'Richard Nelson',
    role: 'Content Creator',
    stars: 5,
    text: 'I’ve been using bg.removal for nearly two years, primarily for Instagram, and it has been incredibly user-friendly, making my work much easier.',
  },
];

export const plans = [
  {
    id: 'Basic',
    price: 10,
    credits: 100,
    desc: 'Best for personal use.',
  },
  {
    id: 'Advanced',
    price: 50,
    credits: 500,
    desc: 'Best for business use.',
  },
  {
    id: 'Business',
    price: 250,
    credits: 5000,
    desc: 'Best for enterprise use.',
  },
];
