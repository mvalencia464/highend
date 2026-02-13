
export interface FormData {
  projectType: string;
  timeline: string;
  name: string;
  email: string;
  phone: string;
  zip: string;
}

export interface Testimonial {
  id: number;
  name: string;
  role: string;
  content: string;
  rating: number;
  avatar: string;
}

export interface Project {
  id: number;
  title: string;
  category: string;
  image: string;
  price?: string;
  desc?: string;
}
