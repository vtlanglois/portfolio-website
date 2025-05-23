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
        <div className="flex flex-col justify-start items-start max-w-xl">
          <div className="flex flex-row gap-1">
            <HandWavingIcon size="64" weight="duotone" />
            <HandPeaceIcon size="64" weight="duotone" />
            <HandPointingIcon size="64" weight="duotone" mirrored />
          </div>
          <Text as="p" variant="paragraph">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus
            consequatur necessitatibus dicta, corporis in corrupti fuga?
            Molestias est temporibus ratione, placeat id, suscipit repellendus
            expedita vero non, quod vitae soluta.
          </Text>
        </div>
      </main>
    </Wrapper>
  );
}
