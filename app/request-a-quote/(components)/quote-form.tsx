"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { format } from "date-fns"
import { CalendarIcon } from "lucide-react"
import { useForm } from "react-hook-form"
import * as z from "zod"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Calendar } from "@/components/ui/calendar"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import { useToast } from "@/components/ui/use-toast"

const formSchema = z.object({
  brideName: z.string().min(2, {
    message: "Name must be at least 2 characters.",
  }),
  groomName: z.string().min(2, {
    message: "Name must be at least 2 characters.",
  }),
  location: z.string(),
  date: z.date(),
  time: z.string(),
  ceremonyType: z.string(),
  guestCount: z.number(),
  makeupArtist: z.string().optional(),
  hearAboutUs: z.string(),
  email: z.string().email().min(1),
  message: z.string(),
})

export function QuoteForm() {
  const { toast } = useToast()

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {},
  })

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values)
    form.reset()
    toast({
      title: "Quotation requested successfully!",
      description: "We will get back to you soon.",
    })
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        <div className="max-lg:space-y-6 lg:flex lg:gap-5">
          <FormField
            control={form.control}
            name="brideName"
            render={({ field }) => (
              <FormItem className="lg:w-1/2">
                <FormLabel>Bride&apos;s name</FormLabel>
                <FormControl>
                  <Input placeholder="Bride's name" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="groomName"
            render={({ field }) => (
              <FormItem className="lg:w-1/2">
                <FormLabel>Groom&apos;s name</FormLabel>
                <FormControl>
                  <Input placeholder="Groom's name" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <div className="max-lg:space-y-6 lg:flex lg:gap-5">
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem className="lg:w-1/2">
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input placeholder="Your email address" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="location"
            render={({ field }) => (
              <FormItem className="lg:w-1/2">
                <FormLabel>Wedding location</FormLabel>
                <FormControl>
                  <Input placeholder="Wedding location" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <div className="max-lg:space-y-6 lg:flex lg:gap-5">
          <FormField
            control={form.control}
            name="date"
            render={({ field }) => (
              <FormItem className="flex flex-col lg:w-1/2">
                <FormLabel className="mb-0.5 mt-2">Wedding date</FormLabel>
                <Popover>
                  <PopoverTrigger asChild>
                    <FormControl>
                      <Button
                        variant={"outline"}
                        className={cn(
                          " pl-3 text-left font-normal",
                          !field.value && "text-muted-foreground"
                        )}
                      >
                        {field.value ? (
                          format(field.value, "PPP")
                        ) : (
                          <span>Wedding date</span>
                        )}
                        <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                      </Button>
                    </FormControl>
                  </PopoverTrigger>
                  <PopoverContent className="w-auto p-0" align="start">
                    <Calendar
                      mode="single"
                      selected={field.value}
                      onSelect={field.onChange}
                      disabled={(date) =>
                        date > new Date() || date < new Date("1900-01-01")
                      }
                      initialFocus
                    />
                  </PopoverContent>
                </Popover>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="time"
            render={({ field }) => (
              <FormItem className="lg:w-1/2">
                <FormLabel>Time</FormLabel>
                <FormControl>
                  <Input
                    type="time"
                    placeholder="Wedding location"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <div className="max-lg:space-y-6 lg:flex lg:gap-5">
          <FormField
            control={form.control}
            name="ceremonyType"
            render={({ field }) => (
              <FormItem className="lg:w-1/2">
                <FormLabel>Ceremony type</FormLabel>
                <Select
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                >
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder="Select ceremony type" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    <SelectItem value="poruwa">Poruwa</SelectItem>
                    <SelectItem value="church">Church</SelectItem>
                    <SelectItem value="church_and_poruwa">
                      Church & Poruwa
                    </SelectItem>
                    <SelectItem value="other">Other</SelectItem>
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="guestCount"
            render={({ field }) => (
              <FormItem className="lg:w-1/2">
                <FormLabel>Number of guests</FormLabel>
                <FormControl>
                  <Input placeholder="Guest count" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <div className="max-lg:space-y-6 lg:flex lg:gap-5">
          <FormField
            control={form.control}
            name="makeupArtist"
            render={({ field }) => (
              <FormItem className="lg:w-1/2">
                <FormLabel>Makeup artist</FormLabel>
                <FormControl>
                  <Input placeholder="Makeup artist" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="hearAboutUs"
            render={({ field }) => (
              <FormItem className="lg:w-1/2">
                <FormLabel>How did you hear about us?</FormLabel>
                <Select
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                >
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder="" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    <SelectItem value="friend">From a friend</SelectItem>
                    <SelectItem value="facebook">Facebook</SelectItem>
                    <SelectItem value="instagram">Instagram</SelectItem>
                    <SelectItem value="website">Website</SelectItem>
                    <SelectItem value="other">Other</SelectItem>
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <FormField
          control={form.control}
          name="message"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Message</FormLabel>
              <FormControl>
                <Textarea
                  placeholder="Tell us a message"
                  className="resize-none"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <div className="max-lg:text-center">
          <Button type="submit" className="px-14 py-6">
            <div className="border-b-1"> Send </div>
          </Button>
        </div>
      </form>
    </Form>
  )
}
