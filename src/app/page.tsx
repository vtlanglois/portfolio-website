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

export default function Home() {
  return (
    <Wrapper>
      <main>
        <div className="flex max-w-xl flex-col items-start justify-start gap-3">
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
        </div>
      </main>
    </Wrapper>
  );
}
