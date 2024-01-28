+++
insert_anchor_links = "heading"
+++

# Linus

🌍 Germany, EU  
🎓 Computer Science Master Student  
🔗 [E-Mail](mailto:linuskmr.dev@gmail.com) | [GitHub](https://github.com/linuskmr/) | [StackOverflow](https://stackoverflow.com/users/14350146/linuskmr)
<!-- Maybe add: 💼 Company (two trailing spaces for <br>) -->  

```rust
for (vga, chr) in iter::zip(
	(0xb8000..0xb8fa0).into_iter().step_by(2),
	[0x4c, 0x69, 0x6e, 0x75, 0x73, 0x13] // CP473
) {
	unsafe { (vga as *mut u8).write_volatile(chr) }
}
```