import {
  Document,
  Page,
  Text,
  View,
  StyleSheet,
  Link,
} from "@react-pdf/renderer";
import { resume } from "@/lib/resume";
import { site } from "@/lib/site";

const COLORS = {
  fg: "#0a0a0a",
  muted: "#52525b",
  faint: "#a1a1aa",
  accent: "#b8801f",
  border: "#d4d4d8",
};

// Single line-height applied to body text. Headers/name use defaults.
const LINE = 1.45;

const styles = StyleSheet.create({
  page: {
    paddingTop: 28,
    paddingBottom: 14,
    paddingLeft: 36,
    paddingRight: 36,
    fontSize: 10,
    fontFamily: "Helvetica",
    color: COLORS.fg,
    lineHeight: LINE,
  },
  name: {
    fontSize: 22,
    fontFamily: "Helvetica-Bold",
    color: COLORS.fg,
    lineHeight: 1.1,
    marginBottom: 6,
  },
  roleLine: {
    fontSize: 11,
    color: COLORS.muted,
    lineHeight: 1.3,
    marginBottom: 4,
  },
  contactRow: {
    fontSize: 9.5,
    color: COLORS.muted,
    marginBottom: 10,
  },
  link: {
    color: COLORS.accent,
    textDecoration: "none",
  },
  hr: {
    borderBottomWidth: 0.5,
    borderBottomColor: COLORS.border,
    marginBottom: 8,
  },
  sectionHeading: {
    fontSize: 9.5,
    fontFamily: "Helvetica-Bold",
    color: COLORS.accent,
    letterSpacing: 1.5,
    textTransform: "uppercase",
    marginBottom: 6,
  },
  section: {
    marginBottom: 6,
  },
  summary: {
    fontSize: 10,
    color: COLORS.fg,
  },
  expBlock: {
    marginBottom: 8,
  },
  expHeaderRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "baseline",
  },
  expRole: {
    fontSize: 11,
    fontFamily: "Helvetica-Bold",
    color: COLORS.fg,
  },
  expCompany: {
    fontFamily: "Helvetica",
    color: COLORS.muted,
    fontWeight: "normal",
  },
  expMeta: {
    fontSize: 9.5,
    color: COLORS.muted,
  },
  expLocation: {
    fontSize: 9.5,
    color: COLORS.faint,
    marginBottom: 3,
  },
  bulletRow: {
    flexDirection: "row",
    marginBottom: 2,
  },
  bulletMarker: {
    width: 10,
    color: COLORS.accent,
    fontSize: 10,
  },
  bulletText: {
    flex: 1,
    color: COLORS.fg,
    fontSize: 10,
  },
  skillsGrid: {
    flexDirection: "row",
    flexWrap: "wrap",
  },
  skillBlock: {
    width: "50%",
    marginBottom: 4,
    paddingRight: 14,
  },
  skillHeading: {
    fontSize: 10,
    fontFamily: "Helvetica-Bold",
    color: COLORS.fg,
    marginBottom: 2,
  },
  skillItems: {
    fontSize: 9.5,
    color: COLORS.muted,
  },
  eduBlock: {
    marginBottom: 4,
  },
  eduDegree: {
    fontSize: 10,
    fontFamily: "Helvetica-Bold",
    color: COLORS.fg,
  },
  eduSchool: {
    fontSize: 9.5,
    color: COLORS.muted,
  },
});

function githubHandleFromUrl(url: string): string {
  return url.replace(/^https?:\/\/(www\.)?github\.com\//, "");
}

// Helvetica core font lacks glyphs for some Unicode chars. Map them to ASCII
// equivalents so the PDF renders cleanly (and stays ATS-parsable).
function sanitizeForHelvetica(text: string): string {
  return text
    .replace(/↔/g, " / ")
    .replace(/→/g, "->")
    .replace(/←/g, "<-");
}

function Bullet({ text }: { text: string }) {
  return (
    <View style={styles.bulletRow}>
      <Text style={styles.bulletMarker}>•</Text>
      <Text style={styles.bulletText}>{sanitizeForHelvetica(text)}</Text>
    </View>
  );
}

export function ResumePdfDocument() {
  const githubHandle = githubHandleFromUrl(site.socials.github);

  return (
    <Document
      title={`${site.name} - Resume`}
      author={site.name}
      subject="Resume / CV"
    >
      <Page size="A4" style={styles.page}>
        {/* Header */}
        <Text style={styles.name}>{site.name}</Text>
        <Text style={styles.roleLine}>
          {site.role} · {site.company}
        </Text>
        <Text style={styles.contactRow}>
          {resume.location}
          {"  ·  "}
          <Link src={`tel:${resume.phone.replace(/[^+\d]/g, "")}`} style={styles.link}>
            {resume.phone}
          </Link>
          {"  ·  "}
          <Link src={`mailto:${site.email}`} style={styles.link}>
            {site.email}
          </Link>
          {"  ·  "}
          <Link src={site.socials.github} style={styles.link}>
            github.com/{githubHandle}
          </Link>
        </Text>

        <View style={styles.hr} />

        {/* Summary */}
        <View style={styles.section}>
          <Text style={styles.sectionHeading}>Summary</Text>
          <Text style={styles.summary}>{sanitizeForHelvetica(resume.summary)}</Text>
        </View>

        {/* Experience */}
        <View style={styles.section}>
          <Text style={styles.sectionHeading}>Experience</Text>
          {resume.experience.map((exp) => (
            <View key={`${exp.role}-${exp.company}`} style={styles.expBlock}>
              <View style={styles.expHeaderRow}>
                <Text style={styles.expRole}>
                  {exp.role}
                  <Text style={styles.expCompany}> · {exp.company}</Text>
                </Text>
                <Text style={styles.expMeta}>{exp.period}</Text>
              </View>
              <Text style={styles.expLocation}>{exp.location}</Text>
              {exp.bullets.map((b, i) => (
                <Bullet key={i} text={b} />
              ))}
            </View>
          ))}
        </View>

        {/* Skills */}
        <View style={styles.section}>
          <Text style={styles.sectionHeading}>Skills</Text>
          <View style={styles.skillsGrid}>
            {resume.skillBlocks.map((block) => (
              <View key={block.heading} style={styles.skillBlock}>
                <Text style={styles.skillHeading}>{block.heading}</Text>
                <Text style={styles.skillItems}>
                  {sanitizeForHelvetica(block.items.join(" · "))}
                </Text>
              </View>
            ))}
          </View>
        </View>

        {/* Education */}
        <View>
          <Text style={styles.sectionHeading}>Education</Text>
          {resume.education.map((ed) => (
            <View key={ed.degree} style={styles.eduBlock}>
              <Text style={styles.eduDegree}>
                {ed.degree}
                <Text style={styles.eduSchool}>
                  {" · "}{ed.school} · {ed.period}
                </Text>
              </Text>
            </View>
          ))}
        </View>
      </Page>
    </Document>
  );
}
