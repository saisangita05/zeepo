import React, { useState } from 'react';
import { BookOpen, GraduationCap, Lightbulb } from 'lucide-react';

const courses = [
    {
        title: 'Web Development Bootcamp',
        description: 'HTML, CSS, JavaScript, React — Learn to build full websites from scratch.',
        level: 'Beginner to Advanced',
        duration: '6 Weeks',
    },
    {
        title: 'Graphic Design Masterclass',
        description: 'Learn Photoshop, Illustrator & Canva. Design posters, pamphlets & social media creatives.',
        level: 'Beginner Friendly',
        duration: '4 Weeks',
    },
    {
        title: 'Digital Marketing 101',
        description: 'SEO, SEM, Social Media & Branding — Everything you need to start a freelance marketing career.',
        level: 'All Levels',
        duration: '5 Weeks',
    },
];

const trendingCoursesMap = {
    'Freelancing Basics': [...courses],
    'Video Editing Essentials': [...courses],
    'Content Writing for Beginners': [...courses],
    'Python for Everybody': [...courses],
};

const skillsMap = {
    'Web Design': [...courses],
    'Logo Creation': [...courses],
    'SEO Optimization': [...courses],
    'Client Communication': [...courses],
    'Portfolio Building': [...courses],
};

const trendingTabs = Object.keys(trendingCoursesMap);
const skillsTabs = Object.keys(skillsMap);

export default function LearnSection() {
    const [activeTrending, setActiveTrending] = useState(trendingTabs[0]);
    const [activeSkill, setActiveSkill] = useState(skillsTabs[0]);

    return (
        <div style={{ padding: '40px', backgroundColor: '#0b1120', minHeight: '100vh', color: 'white' }}>
            {/* Learn & Grow Header */}
            <div className="header" style={{ textAlign: 'center', marginBottom: '40px' }}>
                <h2 style={{ fontSize: '32px', fontWeight: 'bold', color: '#3b82f6' }}>
                    <GraduationCap size={32} style={{ verticalAlign: 'middle', marginRight: '8px' }} />
                    Learn & Grow
                </h2>
                <p style={{ color: '#d1d5db', maxWidth: '600px', margin: '10px auto' }}>
                    Build your skills with real-world courses, taught by experts. Gain confidence and start working on live projects.
                </p>
            </div>

            {/* Trending Courses */}
            <div className="trending" style={{ marginBottom: '30px' }}>
                <h3 style={{ fontSize: '24px', fontWeight: '600', marginBottom: '10px', color: '#e5e7eb' }}>Trending</h3>
                <div style={{ display: 'flex', overflowX: 'auto', gap: '12px', marginBottom: '16px' }}>
                    {trendingTabs.map((topic, idx) => (
                        <div
                            key={idx}
                            onClick={() => setActiveTrending(topic)}
                            style={{
                                minWidth: '200px',
                                backgroundColor: activeTrending === topic ? '#2563eb' : '#f0f9ff',
                                color: activeTrending === topic ? '#fff' : '#1D4ED8',
                                padding: '10px 16px',
                                borderRadius: '6px',
                                fontSize: '16px',
                                cursor: 'pointer',
                                whiteSpace: 'nowrap',
                            }}>
                            {topic}
                        </div>
                    ))}
                </div>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '24px', justifyContent: 'center' }}>
                    {trendingCoursesMap[activeTrending].map((course, index) => (
                        <div key={index} style={{
                            border: '1px solid #ddd',
                            borderRadius: '8px',
                            padding: '20px',
                            width: '300px',
                            backgroundColor: '#fff',
                            color: '#000',
                            boxShadow: '0 4px 8px rgba(0, 0, 0, 0.05)'
                        }}>
                            <h3 style={{ fontSize: '20px', fontWeight: '600', marginBottom: '10px' }}>
                                <BookOpen style={{ verticalAlign: 'middle', marginRight: '6px', color: '#1D4ED8' }} />
                                {course.title}
                            </h3>
                            <p style={{ color: '#444', marginBottom: '10px' }}>{course.description}</p>
                            <p style={{ fontSize: '14px', marginBottom: '5px' }}>Level: {course.level}</p>
                            <p style={{ fontSize: '14px', marginBottom: '15px' }}>Duration: {course.duration}</p>
                            <button style={{ width: '100%', backgroundColor: '#1D4ED8', color: '#fff', padding: '10px', border: 'none', borderRadius: '4px' }}>
                                Enroll Now
                            </button>
                        </div>
                    ))}
                </div>
            </div>

            {/* Skills Section */}
            <div style={{ marginBottom: '40px' }}>
                <h3 style={{ fontSize: '24px', fontWeight: '600', marginBottom: '10px', color: '#e5e7eb' }}>Skills</h3>
                <div style={{ display: 'flex', overflowX: 'auto', gap: '12px', marginBottom: '16px' }}>
                    {skillsTabs.map((skill, idx) => (
                        <div
                            key={idx}
                            onClick={() => setActiveSkill(skill)}
                            style={{
                                minWidth: '180px',
                                backgroundColor: activeSkill === skill ? '#059669' : '#ecfdf5',
                                color: activeSkill === skill ? '#fff' : '#059669',
                                padding: '10px 16px',
                                borderRadius: '6px',
                                fontSize: '16px',
                                cursor: 'pointer',
                                whiteSpace: 'nowrap',
                            }}>
                            {skill}
                        </div>
                    ))}
                </div>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '24px', justifyContent: 'center' }}>
                    {skillsMap[activeSkill].map((course, index) => (
                        <div key={index} style={{
                            border: '1px solid #ddd',
                            borderRadius: '8px',
                            padding: '20px',
                            width: '300px',
                            backgroundColor: '#fff',
                            color: '#000',
                            boxShadow: '0 4px 8px rgba(0, 0, 0, 0.05)'
                        }}>
                            <h3 style={{ fontSize: '20px', fontWeight: '600', marginBottom: '10px' }}>
                                <BookOpen style={{ verticalAlign: 'middle', marginRight: '6px', color: '#1D4ED8' }} />
                                {course.title}
                            </h3>
                            <p style={{ color: '#444', marginBottom: '10px' }}>{course.description}</p>
                            <p style={{ fontSize: '14px', marginBottom: '5px' }}>Level: {course.level}</p>
                            <p style={{ fontSize: '14px', marginBottom: '15px' }}>Duration: {course.duration}</p>
                            <button style={{ width: '100%', backgroundColor: '#1D4ED8', color: '#fff', padding: '10px', border: 'none', borderRadius: '4px' }}>
                                Enroll Now
                            </button>
                        </div>
                    ))}
                </div>
            </div>

            {/* Project Completion Section */}
            <div style={{ marginBottom: '30px' }}>
                <h3 style={{ fontSize: '20px', fontWeight: '600' }}>Project Completion</h3>
                <div style={{ display: 'flex', gap: '12px', marginTop: '10px' }}>
                    {['Complete Now', 'In Review', 'Completed'].map((status, i) => (
                        <button key={i} style={{
                            backgroundColor: '#d1d5db',
                            color: '#000',
                            padding: '10px 16px',
                            borderRadius: '10px',
                            border: 'none',
                            fontWeight: '500',
                            cursor: 'pointer'
                        }}>
                            {status}
                        </button>
                    ))}
                </div>
            </div>

            {/* Earnings Section */}
            <div style={{
                backgroundColor: '#a3a3a3',
                borderRadius: '20px',
                padding: '20px',
                marginBottom: '40px'
            }}>
                <h3 style={{ fontSize: '18px', marginBottom: '10px' }}>Your Earnings</h3>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <span style={{ fontSize: '16px', color: 'black' }}>Rs. 22 Earned</span>
                    <a href="#" style={{ color: 'green', fontWeight: '500' }}>See Wallet</a>
                </div>
                <div style={{
                    backgroundColor: '#d1d5db',
                    height: '12px',
                    borderRadius: '10px',
                    marginTop: '10px',
                    width: '100%'
                }} />
            </div>

            {/* Ongoing Courses */}
            <div style={{ marginBottom: '40px' }}>
                <h3 style={{ fontSize: '20px', fontWeight: '600', marginBottom: '10px' }}>Ongoing courses</h3>
                <div style={{ display: 'flex', gap: '24px' }}>
                    <div style={{ width: '180px', height: '120px', backgroundColor: '#d1d5db', borderRadius: '8px' }} />
                    <div style={{ width: '180px', height: '120px', backgroundColor: '#d1d5db', borderRadius: '8px' }} />
                </div>
            </div>

            {/* Instructor CTA */}
            <div style={{ marginTop: '60px', textAlign: 'center' }}>
                <p style={{ fontSize: '16px', marginBottom: '10px', color: '#facc15' }}>
                    <Lightbulb style={{ verticalAlign: 'middle', marginRight: '6px' }} />
                    Want to share your knowledge? Become an instructor and earn.
                </p>
                <button style={{
                    backgroundColor: '#16a34a',
                    color: '#fff',
                    padding: '10px 20px',
                    border: 'none',
                    borderRadius: '20px',
                    fontSize: '16px',
                    cursor: 'pointer'
                }}>
                    Become an Instructor
                </button>
            </div>
        </div>
    );
}
