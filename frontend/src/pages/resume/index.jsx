import 'antd/dist/reset.css';
import {
    Row,
    Col,
    Card,
    Typography,
    Timeline,
    Tag,
    Space,
    Button,
    ConfigProvider,
    Divider,
} from 'antd';
import {
    MailOutlined,
    PhoneOutlined,
    GithubOutlined,
    MessageOutlined,
    LinkOutlined,
    CodeOutlined,
    UserOutlined,
    BookOutlined,
    InfoCircleOutlined,
    RocketOutlined,
    PartitionOutlined,
    CheckCircleOutlined,
    CrownOutlined,
    ApartmentOutlined
} from '@ant-design/icons';

const { Title, Paragraph, Text, Link } = Typography;

const COLORS = {
    background: '#FFFBF5',
    cardBackground: '#FFFFFF',
    primary: '#D97706',
    text: '#44403C',
    textSecondary: '#78716C',
};

const resumeData = {
    name: 'ILLIA BEREZIN',
    title: 'JUNIOR FRONT-END DEVELOPER',
    contacts: {
        email: 'berezin.main@gmail.com',
        phone: '+380994199656',
        telegram: 'https://t.me/foreverlimbo',
        github: 'https://github.com/BerezinWork',
    },
    about: 'A young and ambitious Front-End developer with a solid foundation in HTML, CSS, and JavaScript. I aspire to grow in the field of Front-End development by creating high-quality, interactive web applications. I am a fast learner and always open to new knowledge and technologies.',
    skills: {
        technical: ['HTML5', 'CSS', 'SASS/SCSS', 'JavaScript', 'C++', 'Qt Creator', 'SQL', 'Git', 'Figma'],
        other: ['Mathematical Modeling', 'Dynamic Systems Analysis', 'Algorithmization', 'English (B1)'],
    },
    experience: [
        {
            title: 'Portfolio Site Layout',
            period: 'August 2023 - Present',
            description: [
                'Creating responsive website layouts using HTML5, CSS (SASS), and JavaScript.',
                'Utilizing the BEM methodology for structured and maintainable code.',
            ],
            link: 'https://github.com/BerezinWork/diploma',
            linkText: 'View on GitHub',
            icon: <CodeOutlined />,
        },
        {
            title: 'Master\'s Project: Front-End for User Interest Identification App',
            period: 'March - June 2023',
            description: [
                'Implemented an interactive quiz using JavaScript with dynamic question loading and progress visualization.',
                'Developed a responsive login page for the user\'s personal account.',
                'The project was defended with a score of 98 out of 100.',
            ],
            icon: <RocketOutlined />,
        },
        {
            title: 'Participation in the MicroCAD 2024 Conference',
            period: 'May 2024',
            description: [
                'Presented the master\'s project at the conference.',
            ],
            icon: <ApartmentOutlined />
        },
        {
            title: 'Bachelor\'s Thesis: Program for Equilibrium Position Determination',
            period: '2023',
            description: [
                'Developed a C++ application using the Qt library to determine the equilibrium position of a dynamic system.',
                'The program is based on carefully analyzed mathematical models and algorithms, achieving high accuracy.',
                'The bachelor\'s thesis was defended with a score of 94 out of 100.',
            ],
            icon: <PartitionOutlined />,
        },
        {
            title: 'SoftServe Academy: WEB UI. ESSENTIALS CRASH COURSE',
            period: '2021',
            description: ['Series SB № 7410/2021'],
            link: 'https://career.softserveinc.com/en-us/certification/verification',
            linkText: 'Verify Certificate',
            icon: <CheckCircleOutlined />,
        },
    ],
    education: [
        {
            university: 'National Technical University "Kharkiv Polytechnic Institute"',
            degree: 'Master of Computer Science',
            period: '2023 - Present',
        },
        {
            university: 'National Technical University "Kharkiv Polytechnic Institute"',
            degree: 'Bachelor of Computer Science',
            period: '2019 - 2023',
            details: 'Thesis defended with a score of 94 out of 100.',
        },
    ],
    additionalInfo: [
        'Experienced with Linux and Bash.',
        'Interested in modern Front-End frameworks (React, Vue.js) and plan to study them.',
        'Experienced in conducting scientific research and writing academic papers.',
    ],
};

const Resume = () => {
    return (
        <ConfigProvider
            theme={{
                token: {
                    colorPrimary: COLORS.primary,
                    colorText: COLORS.text,
                    colorTextSecondary: COLORS.textSecondary,
                    fontFamily: "'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif",
                },
                components: {
                    Card: {
                        headerBg: 'transparent',
                    },
                },
            }}
        >
            <div style={{ backgroundColor: COLORS.background, padding: '24px 0' }}>
                <div style={{ maxWidth: '1100px', margin: '0 auto', padding: '0 24px' }}>
                    <div style={{ textAlign: 'center', marginBottom: '40px' }}>
                        <Title level={1} style={{ color: COLORS.text, marginBottom: 0 }}>
                            {resumeData.name}
                        </Title>
                        <Title level={4} style={{ color: COLORS.primary, marginTop: 0, fontWeight: 'normal' }}>
                            {resumeData.title}
                        </Title>
                    </div>

                    <Row gutter={[32, 32]}>
                        <Col xs={24} md={16}>
                            <Card bordered={false} style={{ backgroundColor: COLORS.cardBackground, marginBottom: 24 }}>
                                <Title level={4}><RocketOutlined /> Experience</Title>
                                <Timeline>
                                    {resumeData.experience.map((exp, index) => (
                                        <Timeline.Item key={index} dot={exp.icon}>
                                            <Title level={5}>{exp.title}</Title>
                                            <Text type="secondary">{exp.period}</Text>
                                            <ul style={{ paddingLeft: 20, margin: '10px 0' }}>
                                                {exp.description.map((item, i) => <li key={i}>{item}</li>)}
                                            </ul>
                                            {exp.link && (
                                                <Link href={exp.link} target="_blank">
                                                    <Button type="link" icon={<LinkOutlined />}>
                                                        {exp.linkText}
                                                    </Button>
                                                </Link>
                                            )}
                                        </Timeline.Item>
                                    ))}
                                </Timeline>
                            </Card>

                            <Card bordered={false} style={{ backgroundColor: COLORS.cardBackground }}>
                                <Title level={4}><BookOutlined /> Education</Title>
                                {resumeData.education.map((edu, index) => (
                                    <div key={index} style={{ marginBottom: index === 0 ? 24 : 0 }}>
                                        <Title level={5}>{edu.degree}</Title>
                                        <Text strong>{edu.university}</Text>
                                        <br />
                                        <Text type="secondary">{edu.period}</Text>
                                        {edu.details && <Paragraph style={{ marginTop: 8 }}>{edu.details}</Paragraph>}
                                    </div>
                                ))}
                            </Card>
                        </Col>

                        <Col xs={24} md={8}>
                            <Card bordered={false} style={{ backgroundColor: COLORS.cardBackground, marginBottom: 24 }}>
                                <Title level={4}><UserOutlined /> About Me</Title>
                                <Paragraph>{resumeData.about}</Paragraph>
                            </Card>

                            <Card bordered={false} style={{ backgroundColor: COLORS.cardBackground, marginBottom: 24 }}>
                                <Title level={4}><CrownOutlined /> Skills</Title>
                                <Title level={5} style={{ color: COLORS.textSecondary, fontSize: '1em' }}>Technical</Title>
                                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', marginBottom: 16 }}>
                                    {resumeData.skills.technical.map((skill) => (
                                        <Tag key={skill} color="orange" style={{ fontSize: '14px', padding: '4px 8px' }}>
                                            {skill}
                                        </Tag>
                                    ))}
                                </div>
                                <Title level={5} style={{ color: COLORS.textSecondary, fontSize: '1em' }}>Other</Title>
                                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                                    {resumeData.skills.other.map((skill) => (
                                        <Tag key={skill} color="gold" style={{ fontSize: '14px', padding: '4px 8px' }}>
                                            {skill}
                                        </Tag>
                                    ))}
                                </div>
                            </Card>

                            <Card bordered={false} style={{ backgroundColor: COLORS.cardBackground }}>
                                <Title level={4}><InfoCircleOutlined /> Additional Information</Title>
                                <ul style={{ paddingLeft: 20, margin: 0 }}>
                                    {resumeData.additionalInfo.map((info, index) => (
                                        <li key={index}>{info}</li>
                                    ))}
                                </ul>
                            </Card>
                        </Col>
                    </Row>

                    <Divider style={{ marginTop: '40px', marginBottom: '0' }} />

                    <footer style={{ textAlign: 'center', padding: '40px 0' }}>
                        <Space direction="vertical" align="center" size="large">
                            <Title level={5} style={{ color: COLORS.textSecondary, textTransform: 'uppercase', letterSpacing: '1px' }}>
                                Contacts
                            </Title>
                            <Space size="large" wrap justify="center">
                                <Link href={`mailto:${resumeData.contacts.email}`} target="_blank">
                                    <Button type="text" style={{ color: COLORS.text }}>
                                        {resumeData.contacts.email} <MailOutlined />
                                    </Button>
                                </Link>
                                <Link href={resumeData.contacts.github} target="_blank">
                                    <Button type="text" style={{ color: COLORS.text }}>
                                        GitHub <GithubOutlined />
                                    </Button>
                                </Link>
                                <Link href={resumeData.contacts.telegram} target="_blank">
                                    <Button type="text" style={{ color: COLORS.text }}>
                                        Telegram <MessageOutlined />
                                    </Button>
                                </Link>
                                <Link href={`tel:${resumeData.contacts.phone}`} target="_blank">
                                    <Button type="text" style={{ color: COLORS.text }}>
                                        {resumeData.contacts.phone} <PhoneOutlined />
                                    </Button>
                                </Link>
                            </Space>
                            <Text type="secondary" style={{ paddingTop: '20px' }}>
                                © {new Date().getFullYear()} Illia Berezin
                            </Text>
                        </Space>
                    </footer>
                </div>
            </div>
        </ConfigProvider>
    );
};
export default Resume;