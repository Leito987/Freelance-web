import { motion } from "framer-motion";

export type TestimonialType = {
  id: string;
  name: string;
  role: string;
  company: string;
  content: string;
  imageUrl: string;
};

type TestimonialProps = {
  testimonial: TestimonialType;
  index: number;
};

export default function Testimonial({ testimonial, index }: TestimonialProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: index * 0.1 }}
      className="bg-white p-6 rounded-lg shadow-md"
    >
      <div className="flex items-center mb-4">
        <img
          src={testimonial.imageUrl}
          alt={testimonial.name}
          className="w-12 h-12 rounded-full mr-4 object-cover"
        />
        <div>
          <h4 className="font-bold">{testimonial.name}</h4>
          <p className="text-sm text-gray-600">
            {testimonial.role}, {testimonial.company}
          </p>
        </div>
      </div>
      <div className="mb-4">
        <svg className="h-5 w-5 text-blue-600" fill="currentColor" viewBox="0 0 24 24">
          <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
        </svg>
      </div>
      <p className="text-gray-700">{testimonial.content}</p>
    </motion.div>
  );
}
