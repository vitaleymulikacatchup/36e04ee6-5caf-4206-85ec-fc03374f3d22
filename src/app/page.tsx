"use client"

import { ThemeProvider } from "@/providers/ThemeProvider";
import NavbarLayoutFloatingOverlay from '@/components/navbar/NavbarLayoutFloatingOverlay/NavbarLayoutFloatingOverlay';
import HeroSplit from '@/components/sections/hero/HeroSplit';
import TextSplitAbout from '@/components/sections/about/TextSplitAbout';
import FeatureCardTwo from '@/components/sections/feature/FeatureCardTwo';
import TestimonialCardTwo from '@/components/sections/testimonial/TestimonialCardTwo';
import ContactCenter from '@/components/sections/contact/ContactCenter';
import FooterLogoEmphasis from '@/components/sections/footer/FooterLogoEmphasis';
import { Code, Mail, ShoppingCart, Smartphone, Sparkles } from "lucide-react";

export default function Home() {
  return (
    <ThemeProvider
      defaultButtonVariant="shift-hover"
      defaultTextAnimation="entrance-slide"
      borderRadius="pill"
    >
      <div id="nav" data-section="nav">
        <NavbarLayoutFloatingOverlay
          navItems={[
            { name: "Home", id: "hero" },
            { name: "About", id: "about" },
            { name: "Services", id: "services" },
            { name: "Contact", id: "contact" }
          ]}
          brandName="Dream Agency"
          button={{ text: "Get Started", href: "contact" }}
        />
      </div>
      
      <div id="hero" data-section="hero">
        <HeroSplit
          title="Transforming Ideas into Digital Reality"
          description="We craft exceptional websites and digital experiences that drive growth for businesses of all sizes. From concept to launch, we're your trusted development partner."
          tag="Dream Agency"
          tagIcon={Sparkles}
          buttons={[
            { text: "View Our Work", href: "services" },
            { text: "Get Started", href: "contact" }
          ]}
          imageSrc="https://images.pexels.com/photos/7550581/pexels-photo-7550581.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
          imageAlt="Dream Agency development team at work"
          imagePosition="right"
        />
      </div>
      
      <div id="about" data-section="about">
        <TextSplitAbout
          title="About Dream Agency"
          description={[
            "We are a passionate team of web developers, designers, and digital strategists dedicated to bringing your vision to life.",
            "With years of experience and a commitment to excellence, we deliver cutting-edge solutions that help businesses thrive in the digital landscape."
          ]}
          buttons={[
            { text: "Learn More", href: "services" }
          ]}
          showBorder={true}
        />
      </div>
      
      <div id="services" data-section="services">
        <FeatureCardTwo
          title="Our Services"
          description="Comprehensive web development solutions tailored to your business needs"
          tag="What We Do"
          features={[
            {
              title: "Custom Web Development",
              description: "Tailored websites built with modern technologies and best practices for optimal performance and user experience.",
              icon: Code,
              button: { text: "Learn More", href: "contact" }
            },
            {
              title: "E-commerce Solutions",
              description: "Complete online stores with secure payment processing, inventory management, and seamless shopping experiences.",
              icon: ShoppingCart,
              button: { text: "Get Started", href: "contact" }
            },
            {
              title: "Mobile App Development",
              description: "Native and cross-platform mobile applications that engage users and drive business growth.",
              icon: Smartphone,
              button: { text: "Discuss Project", href: "contact" }
            }
          ]}
        />
      </div>
      
      <div id="testimonials" data-section="testimonials">
        <TestimonialCardTwo
          title="What Our Clients Say"
          description="Real feedback from businesses we've helped transform digitally"
          tag="Testimonials"
          testimonials={[
            {
              id: "1",
              name: "Sarah Johnson",
              role: "CEO & Founder",
              testimonial: "Dream Agency exceeded our expectations. They delivered a stunning website that perfectly captures our brand and has significantly increased our online conversions.",
              imageSrc: "https://images.pexels.com/photos/6894103/pexels-photo-6894103.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Sarah Johnson portrait"
            },
            {
              id: "2",
              name: "Michael Chen",
              role: "Startup Founder",
              testimonial: "Working with Dream Agency was a game-changer for our startup. Their technical expertise and creative vision helped us launch with confidence.",
              imageSrc: "https://images.pexels.com/photos/3799124/pexels-photo-3799124.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Michael Chen portrait"
            },
            {
              id: "3",
              name: "Emily Rodriguez",
              role: "CTO",
              testimonial: "The team's attention to detail and commitment to quality is outstanding. They delivered exactly what we needed, on time and within budget.",
              imageSrc: "https://images.pexels.com/photos/7792747/pexels-photo-7792747.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Emily Rodriguez portrait"
            },
            {
              id: "4",
              name: "David Kim",
              role: "Marketing Director",
              testimonial: "Dream Agency transformed our online presence completely. Our new website is not only beautiful but also drives real business results.",
              imageSrc: "https://images.pexels.com/photos/5990046/pexels-photo-5990046.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "David Kim portrait"
            }
          ]}
        />
      </div>
      
      <div id="contact" data-section="contact">
        <ContactCenter
          tag="Get In Touch"
          tagIcon={Mail}
          title="Ready to Start Your Project?"
          description="Let's discuss your vision and create something amazing together. Reach out to us today for a free consultation."
          inputPlaceholder="Enter your email"
          buttonText="Get Started"
          termsText="By clicking Get Started you're confirming that you agree with our Terms and Conditions."
        />
      </div>
      
      <div id="footer" data-section="footer">
        <FooterLogoEmphasis
          logoText="Dream Agency"
          columns={[
            {
              items: [
                { label: "About", href: "about" },
                { label: "Services", href: "services" },
                { label: "Contact", href: "contact" }
              ]
            },
            {
              items: [
                { label: "Web Development", href: "services" },
                { label: "E-commerce", href: "services" },
                { label: "Mobile Apps", href: "services" }
              ]
            }
          ]}
        />
      </div>
    </ThemeProvider>
  );
}