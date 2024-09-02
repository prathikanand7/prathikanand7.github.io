import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button, IconButton } from "@/components/ui/button";
import { MoonIcon, SunIcon, Github, Linkedin, Mail, Download } from 'lucide-react';
import { ExternalLink } from '@/components/ui/link';

const Portfolio = () => {
  const [activeTab, setActiveTab] = useState('about');
  const [isDarkMode, setIsDarkMode] = useState(true);

  const toggleTheme = () => {
    setIsDarkMode((prevMode) => !prevMode);
  };

  const skills = ['HTML5 & CSS3', 'JavaScript (ES6+)', 'React.js', 'Node.js', 'UI/UX Design'];
  const education = [
    { degree: 'Master of Science in Computer Science', school: 'Stanford University', year: '2018' },
    { degree: 'Bachelor of Science in Mathematics', school: 'MIT', year: '2016' },
  ];
  const experience = [
    { title: 'Senior System Designer', company: 'AlphaTrade Technologies', period: '2020 - Present' },
    { title: 'Software Engineer', company: 'QuantumLeap Trading', period: '2018 - 2020' },
  ];
  const certificates = [
    { name: 'Financial Risk Manager (FRM)', issuer: 'GARP', link: 'https://www.garp.org/frm' },
    { name: 'AWS Certified Solutions Architect', issuer: 'Amazon', link: 'https://aws.amazon.com/certification/certified-solutions-architect-associate/' },
  ];

  const projects = [
    { 
      id: 1, 
      title: 'E-commerce Platform', 
      description: 'Developed a full-featured e-commerce platform with a modern and responsive user interface. Integrated with payment gateways and implemented a robust order management system.'
    },
    { 
      id: 2,
      title: 'Social Media Dashboard',
      description: 'Designed and built a comprehensive social media dashboard that aggregates data from multiple platforms, providing users with insights and analytics to improve their online presence.'
    },
    { 
      id: 3,
      title: 'Portfolio Website',
      description: 'Designed and developed this portfolio website to showcase my work and provide an engaging way for potential clients and employers to learn more about me and my capabilities.'
    },
  ];

  return (
    <div className={`min-h-screen p-8 transition-colors duration-300 ${isDarkMode ? 'bg-gray-900 text-white' : 'bg-gray-100 text-gray-900'}`}>
      <div className="max-w-6xl mx-auto bg-white dark:bg-gray-800 shadow-xl rounded-lg p-6">
        <header className="mb-8">
          <div className="flex justify-between items-center">
            <div>
              <h1 className="text-4xl font-bold text-blue-900 dark:text-blue-400 mb-2">Your Name</h1>
              <p className="text-xl text-blue-700 dark:text-blue-300">Web Developer • Programmer • Designer</p>
            </div>
            <IconButton
              onClick={toggleTheme}
              className="bg-blue-500 hover:bg-blue-600 text-white dark:bg-blue-700 dark:hover:bg-blue-800 dark:text-white"
            >
              {isDarkMode ? <SunIcon className="h-5 w-5" /> : <MoonIcon className="h-5 w-5" />}
            </IconButton>
          </div>
          <nav className="mt-4">
            <ul className="flex space-x-4">
              {['About', 'Skills', 'Education', 'Experience', 'Projects', 'Contact'].map((item) => (
                <li key={item}>
                  <Button 
                    variant="ghost"
                    onClick={() => setActiveTab(item.toLowerCase())}
                    className={`text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 hover:bg-blue-100 dark:hover:bg-gray-700`}
                  >
                    {item}
                  </Button>
                </li>
              ))}
            </ul>
          </nav>
        </header>

        <main>
          {activeTab === 'about' && (
            <Card>
              <CardHeader>
                <CardTitle>About Me</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="mb-4">Passionate web developer with expertise in modern front-end technologies and a keen eye for design. Committed to creating intuitive and efficient user experiences.</p>
                <div className="flex items-center space-x-4">
                  <ExternalLink href="https://github.com/yourname" className="text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300">
                    <Github className="h-5 w-5 mr-2" /> Github
                  </ExternalLink>
                  <ExternalLink href="https://www.linkedin.com/in/yourname" className="text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300">
                    <Linkedin className="h-5 w-5 mr-2" /> LinkedIn
                  </ExternalLink>
                  <Button className="bg-blue-500 hover:bg-blue-600 text-white dark:bg-blue-700 dark:hover:bg-blue-800">
                    <Download className="h-5 w-5 mr-2" /> Download Resume
                  </Button>
                </div>
              </CardContent>
            </Card>
          )}

          {activeTab === 'skills' && (
            <Card>
              <CardHeader>
                <CardTitle>Skills</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {skills.map((skill) => (
                    <span key={skill} className="bg-blue-100 dark:bg-gray-700 text-blue-800 dark:text-blue-400 px-2 py-1 rounded hover:bg-blue-200 dark:hover:bg-gray-600 transition-colors">
                      {skill}
                    </span>
                  ))}
                </div>
              </CardContent>
            </Card>
          )}

          {activeTab === 'education' && (
            <Card>
              <CardHeader>
                <CardTitle>Education</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {education.map((edu, index) => (
                    <li key={index} className="flex justify-between items-center hover:bg-gray-50 dark:hover:bg-gray-700 p-2 rounded transition-colors">
                      <div>
                        <h3 className="font-semibold">{edu.degree}</h3>
                        <p className="text-sm text-gray-600 dark:text-gray-400">{edu.school}</p>
                      </div>
                      <span className="text-sm text-gray-500 dark:text-gray-400">{edu.year}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          )}

          {activeTab === 'experience' && (
            <Card>
              <CardHeader>
                <CardTitle>Work Experience</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {experience.map((exp, index) => (
                    <li key={index} className="flex justify-between items-center hover:bg-gray-50 dark:hover:bg-gray-700 p-2 rounded transition-colors">
                      <div>
                        <h3 className="font-semibold">{exp.title}</h3>
                        <p className="text-sm text-gray-600 dark:text-gray-400">{exp.company}</p>
                      </div>
                      <span className="text-sm text-gray-500 dark:text-gray-400">{exp.period}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          )}

          {activeTab === 'projects' && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {projects.map((project) => (
                <Card key={project.id} className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <CardTitle>{project.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription>{project.description}</CardDescription>
                  </CardContent>
                  <CardFooter>
                    <ExternalLink href="#" className="text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300">
                      View Project
                    </ExternalLink>
                  </CardFooter>
                </Card>
              ))}
            </div>
          )}

          {activeTab === 'contact' && (
            <Card>
              <CardHeader>
                <CardTitle>Contact Me</CardTitle>
              </CardHeader>
              <CardContent>
                <form className="space-y-4">
                  <input type="email" placeholder="Your Email" className="w-full p-2 border rounded dark:bg-gray-700 dark:text-white" />
                  <textarea placeholder="Your Message" className="w-full p-2 border rounded dark:bg-gray-700 dark:text-white" rows="3"></textarea>
                  <Button className="bg-blue-500 hover:bg-blue-600 text-white dark:bg-blue-700 dark:hover:bg-blue-800">
                    <Mail className="h-5 w-5 mr-2" /> Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
          )}
        </main>
      </div>
    </div>
  );
};

export default Portfolio;