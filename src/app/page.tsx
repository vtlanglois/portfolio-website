import Text from "@/components/Text";
import {
  HandPeaceIcon,
  HandWavingIcon,
  HandPointingIcon,
  GithubLogoIcon,
  LinkedinLogoIcon,
} from "@phosphor-icons/react/ssr";
import Wrapper from "@/components/Wrapper";
import Link from "@/components/Link";
import Card from "@/components/Card";
import Section from "@/components/Section";
import Grid from "@/components/Grid";

export default function Home() {
  return (
    <Wrapper>
      <main>
        <Section>
          <Card className="flex max-w-xl flex-col items-start justify-start gap-3">
            <div className="flex flex-row gap-1">
              <HandWavingIcon size="64" weight="duotone" />
              <HandPeaceIcon size="64" weight="duotone" />
              <HandPointingIcon size="64" weight="duotone" mirrored />
            </div>
            <Text as="h1" variant="heading1">
              Hiya! I'm
              <br />
              <span className="text-5xl text-blue-500 italic">
                Vincent Langlois
              </span>
              ,
              <br />
              software engineer.
            </Text>
            <Text as="p" variant="paragraph">
              I build digital products, and I love to learn new things. I am
              currently working at Eli Lilly and Company as a senior software
              engineer.
            </Text>
            <div className="flex flex-row gap-3">
              <Link
                variant="icon"
                appearance="primary"
                href="https://github.com/vtlanglois"
                aria-label="Github"
              >
                <GithubLogoIcon size="48" />
              </Link>
              <Link
                variant="icon"
                appearance="primary"
                href="https://www.linkedin.com/in/vtlanglois/"
                aria-label="LinkedIn"
              >
                <LinkedinLogoIcon size="48" />
              </Link>
            </div>
          </Card>
        </Section>
        <Section>
          <Text as="h2" variant="heading2">
            Projects
          </Text>
          <Grid>
            <Card>
              <Text as="h3" variant="heading3">
                Project 1
              </Text>
              <Text as="p" variant="paragraph">
                Description of project 1.
              </Text>
            </Card>
            <Card>
              <Text as="h3" variant="heading3">
                Project 2
              </Text>
              <Text as="p" variant="paragraph">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Esse optio ut praesentium cum, laudantium reprehenderit, quisquam voluptatum tenetur debitis et a. Optio odit sunt ut, repellat in error temporibus nemo?
              </Text>
            </Card>
            <Card>
              <Text as="h3" variant="heading3">
                Project 3
              </Text>
              <Text as="p" variant="paragraph">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum. Quisquam, voluptatum.
              </Text>
            </Card>
          </Grid>
        </Section>
      </main>
    </Wrapper>
  );
}
