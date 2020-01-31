# frozen_string_literal: true

def flatten(root)
  puts root.val
  flatten(root.left) if root.left
  flatten(root.right) if root.right
end
