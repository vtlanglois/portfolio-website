import Text from "@/components/Text";
import {
  HandPeaceIcon,
  HandWavingIcon,
  HandPointingIcon,
} from "@phosphor-icons/react/ssr";

export default function Home() {
  return (
    <div className="mr-auto ml-auto max-w-[80%]">
      <main className="">
        <div className="flex flex-row gap-1">
          <HandWavingIcon size="64" weight="duotone" />
          <HandPeaceIcon size="64" weight="duotone" />
          <HandPointingIcon size="64" weight="duotone" mirrored />
        </div>
        <Text as="p" variant="paragraph">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus
          consequatur necessitatibus dicta, corporis in corrupti fuga? Molestias
          est temporibus ratione, placeat id, suscipit repellendus expedita vero
          non, quod vitae soluta.
        </Text>
      </main>
    </div>
  );
}
