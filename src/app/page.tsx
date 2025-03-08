import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Textarea } from '@/components/ui/textarea';
import { Bot, Send, User } from 'lucide-react';
import SwitchThemeBtn from './components/switch-theme-button';

export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-slate-50">
      <Card className=" w-full max-w-[28rem] h-[47rem] grid grid-rows-[min-content_1fr_min-content]">
        <CardHeader className="flex flex-row justify-between items-center">
          <CardTitle>Fintalk Chatbot</CardTitle>
          <SwitchThemeBtn />
        </CardHeader>
        <CardContent className="space-y-4 overflow-y-auto">
          <div className="flex gap-3 text-slate-600 text-sm  bg-slate-100 rounded p-2 items-start">
            <p className="leading-relaxed">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Dignissimos voluptate ipsam autem incidunt? Non vel nostrum at sed
              voluptates reiciendis dignissimos eos, omnis deserunt modi error
              iure illum nobis asperiores. Lorem ipsum dolor sit amet
              consectetur adipisicing elit.
            </p>
            <div className="flex flex-col">
              <User />
              <strong>You</strong>
            </div>
          </div>

          <div className="flex gap-3 text-slate-600 text-sm bg-green-100 rounded p-2 items-start">
            <div className="flex flex-col">
              <Bot />
              <strong>Bot</strong>
            </div>

            <p className="leading-relaxed">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Dignissimos voluptate ipsam autem incidunt? Non vel nostrum at sed
              voluptates reiciendis dignissimos eos, omnis deserunt modi error
              iure illum nobis asperiores. Lorem ipsum dolor sit amet
              consectetur adipisicing elit. Dignissimos voluptate ipsam autem
              incidunt? Non vel nostrum at sed voluptates reiciendis dignissimos
              eos, omnis deserunt modi error iure illum nobis asperiores. Lorem
              ipsum dolor sit amet consectetur adipisicing elit. Dignissimos
              voluptate ipsam autem incidunt? Non vel nostrum at sed voluptates
              reiciendis dignissimos eos, omnis deserunt modi error iure illum
              nobis asperiores. Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Dignissimos voluptate ipsam autem incidunt? Non
              vel nostrum at sed voluptates reiciendis dignissimos eos, omnis
              deserunt modi error iure illum nobis asperiores.
            </p>
          </div>
        </CardContent>
        <CardFooter className="space-x-2 ">
          <Textarea
            placeholder="Como posso te ajudar?"
            className="resize-none  mendable-textarea dark:bg-slate-100 text-black max-h-[25dvh] overflow-y-auto"
          />
          <Button
            type="submit"
            className="bg-zinc-700 dark:bg-white cursor-pointer"
          >
            <Send />
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
}
