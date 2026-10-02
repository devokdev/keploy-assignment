import type { MDXComponents } from 'mdx/types'
import { FlowDiagram } from '@/components/FlowDiagram'
import { ArchitectureDiagram } from '@/components/ArchitectureDiagram'
import { AnnotatedYaml } from '@/components/AnnotatedYaml'
import { Callout } from '@/components/Callout'
import { CodeBlock } from '@/components/CodeBlock'
import { GotchaAccordion } from '@/components/GotchaAccordion'
import { TutorialProgress } from '@/components/TutorialProgress'

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    FlowDiagram,
    ArchitectureDiagram,
    AnnotatedYaml,
    Callout,
    GotchaAccordion,
    TutorialProgress,
    pre: ({ children, ...props }: any) => {
      const codeChild = children?.props
      const className = codeChild?.className || ''
      return (
        <CodeBlock className={className} {...props}>
          {codeChild?.children || children}
        </CodeBlock>
      )
    },
    ...components,
  }
}
