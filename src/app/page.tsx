import Text from "@/components/Text";
import {
  HandPeaceIcon,
  HandWavingIcon,
  HandPointingIcon,
} from "@phosphor-icons/react/ssr";
import Wrapper from "@/components/Wrapper";

export default function Home() {
  return (
    <Wrapper>
      <main>
        <div className="flex flex-col justify-start items-start max-w-xl gap-3">
          <div className="flex flex-row gap-1">
            <HandWavingIcon size="64" weight="duotone" />
            <HandPeaceIcon size="64" weight="duotone" />
            <HandPointingIcon size="64" weight="duotone" mirrored />
          </div>
          <Text as="h1" variant="heading1">
            Hiya! I'm
            <br />
            <span className="text-blue-500 text-5xl italic">
              Vincent Langlois,
            </span>{" "}
            <br />
            software engineer.
          </Text>
          <Text as="p" variant="paragraph">
            I build digtital products, and I love to learn new things. I am
            currently working at Eli Lilly and Company as a senior software engineer.
          </Text>
        </div>
      </main>
    </Wrapper>
  );
}
