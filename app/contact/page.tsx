'use client'

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { TiSocialLinkedin, TiSocialInstagramCircular, TiSocialFacebook, TiSocialTwitter } from "react-icons/ti";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import Link from "next/link";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    console.log('Form submitted:', formData);
    alert('Thank you for your message! I\'ll get back to you soon.');
    
    // Reset form
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: ''
    });
    
    setIsSubmitting(false);
  };

  const contactInfo = [
    {
      icon: <Mail className="w-6 h-6" />,
      title: "Email",
      details: "siddhartha@example.com",
      link: "mailto:siddhartha@example.com"
    },
    {
      icon: <Phone className="w-6 h-6" />,
      title: "Phone",
      details: "+1 (555) 123-4567",
      link: "tel:+15551234567"
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      title: "Location",
      details: "St. Louis, MO, USA",
      link: null
    }
  ];

  return (
    <main className="flex flex-col min-h-screen px-4 py-12 sm:px-8 md:px-16 lg:px-30">
      <div className="container mx-auto max-w-6xl">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            Get In <span className="text-accent-foreground">Touch</span>
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            I'd love to hear from you! Whether you have a project in mind, want to collaborate, 
            or just want to say hello, feel free to reach out.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-12">
          {/* Contact Information */}
          <div className="lg:col-span-1">
            <Card className="p-8 h-fit">
              <h2 className="text-2xl font-bold mb-6">Contact Information</h2>
              
              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <div key={index} className="flex items-start gap-4">
                    <div className="text-accent-foreground mt-1">
                      {info.icon}
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">{info.title}</h3>
                      {info.link ? (
                        <a 
                          href={info.link} 
                          className="text-muted-foreground hover:text-accent-foreground transition-colors"
                        >
                          {info.details}
                        </a>
                      ) : (
                        <p className="text-muted-foreground">{info.details}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              {/* Social Media */}
              <div className="mt-8 pt-8 border-t border-border">
                <h3 className="font-semibold mb-4">Follow Me</h3>
                <div className="flex gap-4">
                  <Link 
                    href="#" 
                    className="text-muted-foreground hover:text-accent-foreground transition-colors"
                  >
                    <TiSocialInstagramCircular className="text-3xl" />
                  </Link>
                  <Link 
                    href="#" 
                    className="text-muted-foreground hover:text-accent-foreground transition-colors"
                  >
                    <TiSocialFacebook className="text-3xl" />
                  </Link>
                  <Link 
                    href="#" 
                    className="text-muted-foreground hover:text-accent-foreground transition-colors"
                  >
                    <TiSocialLinkedin className="text-3xl" />
                  </Link>
                  <Link 
                    href="#" 
                    className="text-muted-foreground hover:text-accent-foreground transition-colors"
                  >
                    <TiSocialTwitter className="text-3xl" />
                  </Link>
                </div>
              </div>
            </Card>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <Card className="p-8">
              <h2 className="text-2xl font-bold mb-6">Send Me a Message</h2>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="name">Name *</Label>
                    <Input
                      id="name"
                      name="name"
                      type="text"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="mt-1"
                      placeholder="Your full name"
                    />
                  </div>
                  <div>
                    <Label htmlFor="email">Email *</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="mt-1"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>

                <div>
                  <Label htmlFor="subject">Subject *</Label>
                  <Input
                    id="subject"
                    name="subject"
                    type="text"
                    value={formData.subject}
                    onChange={handleInputChange}
                    required
                    className="mt-1"
                    placeholder="What's this about?"
                  />
                </div>

                <div>
                  <Label htmlFor="message">Message *</Label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={6}
                    className="mt-1"
                    placeholder="Tell me more about your project or question..."
                  />
                </div>

                <Button 
                  type="submit" 
                  disabled={isSubmitting}
                  className="w-full bg-accent-foreground text-background hover:bg-transparent hover:text-accent-foreground border-2 hover:border-accent-foreground rounded-full py-3"
                >
                  {isSubmitting ? (
                    <>
                      <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-current mr-2"></div>
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4 mr-2" />
                      Send Message
                    </>
                  )}
                </Button>
              </form>
            </Card>
          </div>
        </div>

        {/* Call to Action */}
        <section className="text-center bg-accent-foreground/5 rounded-2xl p-12 mt-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Start Something Great?</h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Whether you need compelling content, strategic guidance, or just want to brainstorm ideas, 
            I'm here to help bring your vision to life.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="bg-accent-foreground text-background hover:bg-transparent hover:text-accent-foreground border-2 hover:border-accent-foreground rounded-full px-8 py-3">
              <Link href="/blog">View My Work</Link>
            </Button>
            <Button variant="outline" className="hover:bg-accent-foreground text-accent-foreground hover:text-white border-2 border-accent-foreground rounded-full px-8 py-3">
              <Link href="/about">Learn More About Me</Link>
            </Button>
          </div>
        </section>
      </div>
    </main>
  );
}