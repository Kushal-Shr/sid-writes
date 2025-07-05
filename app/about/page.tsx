import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Link from "next/link";
import MainPhoto from "@/components/MainPhoto";

export default function About() {
  const skills = [
    "Creative Writing",
    "Technical Writing",
    "Content Strategy",
    "Storytelling",
    "Research & Analysis",
    "Digital Marketing",
    "SEO Writing",
    "Social Media"
  ];

  const achievements = [
    {
      title: "Published Author",
      description: "Over 50 articles published across various platforms",
      year: "2023"
    },
    {
      title: "Content Award Winner",
      description: "Best Digital Content Creator - Writers Guild",
      year: "2022"
    },
    {
      title: "Featured Speaker",
      description: "Keynote at Digital Writing Conference",
      year: "2024"
    }
  ];

  return (
    <main className="flex flex-col min-h-screen px-4 py-12 sm:px-8 md:px-16 lg:px-30">
      <div className="container mx-auto max-w-6xl">
        {/* Hero Section */}
        <div className="flex flex-col lg:flex-row items-center gap-12 mb-16">
          <div className="lg:w-1/2 order-2 xl:order-none">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              About <span className="text-accent-foreground">Me</span>
            </h1>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              I'm Siddhartha Baniya, a passionate writer dedicated to exploring the intersection of technology, creativity, and human experience. Through my writing, I aim to bridge complex ideas with accessible storytelling, creating content that informs, inspires, and connects.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button className="bg-accent-foreground text-background hover:bg-transparent hover:text-accent-foreground border-2 hover:border-accent-foreground rounded-full px-8 py-3">
                <Link href="/contact">Get In Touch</Link>
              </Button>
              <Button variant="outline" className="hover:bg-accent-foreground text-accent-foreground hover:text-white border-2 border-accent-foreground rounded-full px-8 py-3">
                <Link href="/blog">Read My Work</Link>
              </Button>
            </div>
          </div>
          <div className="lg:w-1/2 order-1 xl:order-none">
            <div className="mb-10 xl:mb-0">
            <MainPhoto />
          </div>
          </div>
        </div>

        {/* My Story Section */}
        <section className="mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">My Story</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="p-8 h-full">
              <h3 className="text-xl font-semibold mb-4 text-accent-foreground">The Beginning</h3>
              <p className="text-muted-foreground leading-relaxed">
                My journey into writing began during my college years when I discovered the power of words to transform ideas into impact. What started as a personal blog evolved into a platform for sharing insights on technology, creativity, and the human experience.
              </p>
            </Card>
            <Card className="p-8 h-full">
              <h3 className="text-xl font-semibold mb-4 text-accent-foreground">The Vision</h3>
              <p className="text-muted-foreground leading-relaxed">
                Today, I focus on creating content that bridges the gap between complex technical concepts and everyday understanding. My goal is to make knowledge accessible, engaging, and actionable for readers from all backgrounds.
              </p>
            </Card>
          </div>
        </section>

        {/* Skills Section */}
        <section className="mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">Skills & Expertise</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {skills.map((skill, index) => (
              <Card key={index} className="p-4 text-center hover:shadow-lg transition-shadow duration-300">
                <span className="font-medium">{skill}</span>
              </Card>
            ))}
          </div>
        </section>

        {/* Achievements Section */}
        <section className="mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">Achievements</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {achievements.map((achievement, index) => (
              <Card key={index} className="p-6 text-center hover:shadow-lg transition-shadow duration-300">
                <div className="text-2xl font-bold text-accent-foreground mb-2">{achievement.year}</div>
                <h3 className="text-lg font-semibold mb-3">{achievement.title}</h3>
                <p className="text-muted-foreground text-sm">{achievement.description}</p>
              </Card>
            ))}
          </div>
        </section>

        {/* Values Section */}
        <section className="mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">What I Believe In</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-4xl mb-4">🎯</div>
              <h3 className="text-xl font-semibold mb-3">Authenticity</h3>
              <p className="text-muted-foreground">
                Every piece of content should reflect genuine insights and honest perspectives.
              </p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-4">🚀</div>
              <h3 className="text-xl font-semibold mb-3">Innovation</h3>
              <p className="text-muted-foreground">
                Embracing new ideas and technologies to create meaningful impact.
              </p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-4">🤝</div>
              <h3 className="text-xl font-semibold mb-3">Connection</h3>
              <p className="text-muted-foreground">
                Building bridges between ideas, people, and communities through storytelling.
              </p>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="text-center bg-accent-foreground/5 rounded-2xl p-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Let's Connect</h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            I'm always interested in collaborating on exciting projects, sharing ideas, or simply having a conversation about writing and creativity.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="bg-accent-foreground text-background hover:bg-transparent hover:text-accent-foreground border-2 hover:border-accent-foreground rounded-full px-8 py-3">
              <Link href="/contact">Start a Conversation</Link>
            </Button>
            <Button variant="outline" className="hover:bg-accent-foreground text-accent-foreground hover:text-white border-2 border-accent-foreground rounded-full px-8 py-3">
              <Link href="/blog">Explore My Writing</Link>
            </Button>
          </div>
        </section>
      </div>
    </main>
  );
}