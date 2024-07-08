'use client'

import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "./ui/form"
import { TimePickerDemo } from "./time-picker-demo"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { z } from "zod"
import { useState } from "react"
import { useToast } from "./ui/use-toast"
import BranchAddButton from "./branch-add-button"
import { useRouter } from "next/navigation"
import { useSWRConfig } from "swr"

const timePattern = /^([01]\d|2[0-3]):([0-5]\d)$/;
const BranchSchema = z
  .object({
    name: z.string().min(1, 'Name is required').max(255),
    duration: z.number()
})

export function DialogCloseButton2() {
    const {toast} = useToast()

    const form = useForm<z.infer<typeof BranchSchema>>({
        resolver: zodResolver(BranchSchema),
        defaultValues: {
          name: "",
          duration: 0,
        },
      })

async function onSubmit(data: z.infer<typeof BranchSchema>) {
    const response = await fetch("/api/service", {
        method: "POST",
        body: JSON.stringify({
          name: data.name,
          duration: data.duration,
    })
  })

    if(response.ok) {
        toast({
            title: "Successfully submitted",
            description: (
            <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
                <code className="text-white">{JSON.stringify(data, null, 2)}</code>
            </pre>
            ),
        })
    } else {
        toast({
            title: "Gagal",
        })
        }
    }

  return (
    <Dialog>
      <DialogTrigger>
        <BranchAddButton />
      </DialogTrigger>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>Add Service</DialogTitle>
          <DialogDescription>
            Add new service for this branch
          </DialogDescription>
        </DialogHeader>
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="w-2/3 space-y-6">
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Name</FormLabel>
              <FormControl>
                <Input placeholder="shadcn" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="duration"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Duration</FormLabel>
              <FormControl>
                <Input type="number" placeholder="0" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <DialogFooter className="sm:justify-start">
          <DialogClose asChild>
          <Button type="submit">Submit</Button>
          </DialogClose>
        </DialogFooter>
      </form>
      </Form>
      </DialogContent>
    </Dialog>
  )
}